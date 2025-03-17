import React, { useRef, useEffect, useState } from 'react';
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts';
import { Settings, ChevronDown } from 'lucide-react';

interface ChartContainerProps {
  data: any[];
  indicators: string[];
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, indicators }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#ffffff' },
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#f0f0f0' },
        horzLines: { color: '#f0f0f0' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: '#f0f0f0',
      },
      timeScale: {
        borderColor: '#f0f0f0',
        timeVisible: true,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    candlestickSeries.setData(data);

    // Add indicators based on user selection
    if (indicators.includes('RSI')) {
      const rsiSeries = chart.addLineSeries({
        color: '#FF6B6B',
        lineWidth: 2,
      });
      const rsiData = data.map((d, i) => ({
        time: d.time, // Use the same timestamp as the candlestick data
        value: 50 + Math.sin(i / 10) * 20, // Mock RSI calculation
      }));
      rsiSeries.setData(rsiData);
    }

    if (indicators.includes('MACD')) {
      const macdSeries = chart.addLineSeries({
        color: '#4D96FF',
        lineWidth: 2,
      });
      const macdData = data.map((d, i) => ({
        time: d.time, // Use the same timestamp as the candlestick data
        value: Math.sin(i / 10) * 10, // Mock MACD calculation
      }));
      macdSeries.setData(macdData);
    }

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data, indicators]);

  return <div ref={chartContainerRef} className="w-full h-[600px]" />;
};

export const AnalysisPage: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('1h');
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);
  const [showIndicatorMenu, setShowIndicatorMenu] = useState(false);

  const timeframes = ['1m', '5m', '15m', '1h', '4h', '1d'];
  const availableIndicators = [
    'RSI',
    'MACD',
    'Bollinger Bands',
    'Moving Average',
    'Volume',
  ];

  const toggleIndicator = (indicator: string) => {
    setSelectedIndicators((prev) =>
      prev.includes(indicator)
        ? prev.filter((i) => i !== indicator)
        : [...prev, indicator]
    );
  };

  const generateChartData = (timeframe: string) => {
    const now = Date.now();
    const interval = {
      '1m': 60000,
      '5m': 300000,
      '15m': 900000,
      '1h': 3600000,
      '4h': 14400000,
      '1d': 86400000,
    }[timeframe];

    return Array.from({ length: 100 }, (_, i) => ({
      time: (now - (100 - i) * interval) / 1000, // Convert to Unix timestamp (in seconds)
      open: 100 + Math.random() * 10,
      high: 105 + Math.random() * 10,
      low: 95 + Math.random() * 10,
      close: 100 + Math.random() * 10,
    }));
  };

  const chartData = generateChartData(selectedTimeframe);

  return (
    <div className="space-y-6 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Technical Analysis</h1>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowIndicatorMenu(!showIndicatorMenu)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <Settings className="h-5 w-5" />
                <span>Indicators</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showIndicatorMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  {availableIndicators.map((indicator) => (
                    <label
                      key={indicator}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedIndicators.includes(indicator)}
                        onChange={() => toggleIndicator(indicator)}
                        className="mr-2"
                      />
                      {indicator}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className="flex rounded-lg overflow-hidden border">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-3 py-1 ${
                    selectedTimeframe === tf
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
        </div>
        <ChartContainer data={chartData} indicators={selectedIndicators} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedIndicators.map((indicator) => (
          <div
            key={indicator}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4">{indicator}</h3>
            <div className="h-[200px] bg-gray-50 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
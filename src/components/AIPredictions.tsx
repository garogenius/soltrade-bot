import React from 'react';
import { Brain, TrendingUp, TrendingDown } from 'lucide-react';
import { AIPrediction } from '../types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface AIPredictionsProps {
  predictions: AIPrediction[];
}

export const AIPredictions: React.FC<AIPredictionsProps> = ({ predictions }) => {
  return (
    <div className="space-y-6">
      {predictions.map((prediction) => (
        <div
          key={prediction.pair}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-purple-600" />
              <h2 className="text-xl font-semibold">{prediction.pair} Analysis</h2>
            </div>
            <div
              className={`flex items-center px-3 py-1 rounded-full ${
                prediction.sentiment === 'bullish'
                  ? 'bg-green-100 text-green-800'
                  : prediction.sentiment === 'bearish'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {prediction.sentiment === 'bullish' ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : prediction.sentiment === 'bearish' ? (
                <TrendingDown className="h-4 w-4 mr-1" />
              ) : null}
              {prediction.sentiment.toUpperCase()}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Price Target</div>
                  <div className="text-2xl font-bold">
                    ${prediction.priceTarget.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Confidence</div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-24 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{ width: `${prediction.confidence * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">
                      {(prediction.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Analysis</div>
                  <div className="text-gray-700">{prediction.analysis}</div>
                </div>
              </div>
            </div>

            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={prediction.priceProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(timestamp) =>
                      new Date(timestamp).toLocaleTimeString()
                    }
                  />
                  <YAxis domain={['auto', 'auto']} />
                  <Tooltip
                    labelFormatter={(timestamp) =>
                      new Date(timestamp).toLocaleString()
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.1}
                    name="Actual"
                  />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.1}
                    name="Predicted"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
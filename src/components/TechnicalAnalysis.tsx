import React from 'react';
import { BarChart2 } from 'lucide-react';
import { TechnicalIndicator } from '../types';

interface TechnicalAnalysisProps {
  indicators: TechnicalIndicator[];
}

export const TechnicalAnalysis: React.FC<TechnicalAnalysisProps> = ({
  indicators,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BarChart2 className="h-6 w-6 mr-2 text-blue-600" />
        Technical Indicators
      </h2>
      <div className="grid gap-4">
        {indicators.map((indicator) => (
          <div
            key={indicator.name}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{indicator.name}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  indicator.signal === 'buy'
                    ? 'bg-green-100 text-green-800'
                    : indicator.signal === 'sell'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {indicator.signal.toUpperCase()}
              </span>
            </div>
            <div className="mt-2 text-gray-600">
              Value: {indicator.value.toFixed(2)}
            </div>
            <div className="mt-1 text-sm text-gray-500">
              Updated: {new Date(indicator.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
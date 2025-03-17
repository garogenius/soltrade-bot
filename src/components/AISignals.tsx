import React from 'react';
import { Brain, TrendingUp, TrendingDown } from 'lucide-react';
import { AISignal } from '../types';

interface AISignalsProps {
  signals: AISignal[];
}

export const AISignals: React.FC<AISignalsProps> = ({ signals }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center">
          <Brain className="h-6 w-6 mr-2 text-purple-600" />
          AI Trading Signals
        </h2>
      </div>

      <div className="grid gap-4">
        {signals.map((signal, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {signal.action === 'buy' ? (
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                ) : signal.action === 'sell' ? (
                  <TrendingDown className="h-5 w-5 text-red-600 mr-2" />
                ) : (
                  <Brain className="h-5 w-5 text-gray-600 mr-2" />
                )}
                <span
                  className={`font-semibold ${
                    signal.action === 'buy'
                      ? 'text-green-600'
                      : signal.action === 'sell'
                      ? 'text-red-600'
                      : 'text-gray-600'
                  }`}
                >
                  {signal.action.toUpperCase()}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(signal.timestamp).toLocaleString()}
              </div>
            </div>
            <div className="mt-2">
              <div className="text-sm text-gray-600">{signal.reason}</div>
              <div className="mt-2 flex items-center">
                <div className="text-sm font-medium text-gray-500">
                  Confidence:
                </div>
                <div className="ml-2 h-2 w-24 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-purple-600 rounded-full"
                    style={{ width: `${signal.confidence * 100}%` }}
                  ></div>
                </div>
                <div className="ml-2 text-sm text-gray-600">
                  {(signal.confidence * 100).toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
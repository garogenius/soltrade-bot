import React from 'react';
import { Trade } from '../types';

interface TradeHistoryProps {
  trades: Trade[];
}

export const TradeHistory: React.FC<TradeHistoryProps> = ({ trades }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {trades.map((trade) => (
            <tr key={trade.id}>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                trade.type === 'buy' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trade.type.toUpperCase()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                ${trade.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {trade.amount.toFixed(3)} SOL
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                ${trade.total.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {new Date(trade.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
import React from 'react';
import { Briefcase, TrendingUp, TrendingDown } from 'lucide-react';
import { Portfolio as PortfolioType } from '../types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface PortfolioProps {
  portfolio: PortfolioType;
}

export const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
          Portfolio Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500">Total Value</div>
            <div className="text-2xl font-bold">${portfolio.totalValue.toFixed(2)}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500">SOL Balance</div>
            <div className="text-2xl font-bold">{portfolio.solBalance.toFixed(3)} SOL</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500">USDC Balance</div>
            <div className="text-2xl font-bold">${portfolio.usdcBalance.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Performance</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolio.performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Value']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#4F46E5"
                fill="#818CF8"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Open Positions</h3>
        <div className="space-y-4">
          {portfolio.positions.map((position, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{position.pair}</span>
                <span
                  className={`flex items-center ${
                    position.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {position.pnl >= 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {position.pnlPercentage.toFixed(2)}%
                </span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div>Amount: {position.amount.toFixed(3)}</div>
                  <div>Avg. Price: ${position.averagePrice.toFixed(2)}</div>
                </div>
                <div>
                  <div>Current: ${position.currentPrice.toFixed(2)}</div>
                  <div>P&L: ${position.pnl.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
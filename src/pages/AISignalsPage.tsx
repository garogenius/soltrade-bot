import React from 'react';
import { AIPredictions } from '../components/AIPredictions';
import { TokenList } from '../components/TokenList';
import { mockAIPredictions, mockTokens } from '../mockData';

export const AISignalsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">AI Trading Signals</h1>
        <AIPredictions predictions={mockAIPredictions} />
      </div>
      <div>
        <TokenList
          tokens={mockTokens}
          onSelect={(token) => console.log('Selected token:', token)}
        />
      </div>
    </div>
  );
};
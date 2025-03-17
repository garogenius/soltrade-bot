import React, { useState } from 'react';
import { Token } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TokenListProps {
  tokens: Token[];
  onSelect: (token: Token) => void;
}

export const TokenList: React.FC<TokenListProps> = ({ tokens, onSelect }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 20; // Adjust as needed
  const startIndex = (page - 1) * itemsPerPage;
  const visibleTokens = tokens.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Available Tokens</h2>
      </div>
      <div className="divide-y">
        {visibleTokens.map((token) => (
          <div
            key={token.symbol}
            className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => onSelect(token)}
          >
            {/* Render token details */}
          </div>
        ))}
      </div>
      <div className="p-4 flex justify-between">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={startIndex + itemsPerPage >= tokens.length}
          className="px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
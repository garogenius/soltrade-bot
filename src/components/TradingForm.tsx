import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

export const TradingForm: React.FC = () => {
  const [type, setType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the trade to the backend
    console.log('Trade submitted:', { type, amount, price });
    alert('Trade submitted (demo only)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => setType('buy')}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold ${
            type === 'buy'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => setType('sell')}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold ${
            type === 'sell'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Price (USDC)
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter price"
          step="0.01"
          min="0"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Amount (SOL)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter amount"
          step="0.001"
          min="0"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Total (USDC)
        </label>
        <div className="text-lg font-semibold">
          ${((parseFloat(amount) || 0) * (parseFloat(price) || 0)).toFixed(2)}
        </div>
      </div>

      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${
          type === 'buy' ? 'bg-green-600' : 'bg-red-600'
        }`}
      >
        {type === 'buy' ? 'Buy SOL' : 'Sell SOL'}
      </button>
    </form>
  );
};
import React from 'react';
import { OrderBook as OrderBookType } from '../types';

interface OrderBookProps {
  orderBook: OrderBookType;
}

export const OrderBook: React.FC<OrderBookProps> = ({ orderBook }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-green-600">Bids</h3>
        <div className="space-y-1">
          {orderBook.bids.map(([price, amount], i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-green-600">${price.toFixed(2)}</span>
              <span>{amount.toFixed(3)} SOL</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-red-600">Asks</h3>
        <div className="space-y-1">
          {orderBook.asks.map(([price, amount], i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-red-600">${price.toFixed(2)}</span>
              <span>{amount.toFixed(3)} SOL</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
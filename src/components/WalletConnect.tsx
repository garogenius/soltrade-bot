import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet } from 'lucide-react';

export const WalletConnect: React.FC = () => {
  const { connected, publicKey, balance } = useWallet();

  return (
    <div className="flex items-center space-x-4">
      {connected && publicKey && (
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
          <Wallet className="h-5 w-5 text-gray-600" />
          <div>
            <div className="text-sm font-medium text-gray-900">
              {publicKey.toString().slice(0, 4)}...
              {publicKey.toString().slice(-4)}
            </div>
            {balance && (
              <div className="text-xs text-gray-600">
                {(balance / 1e9).toFixed(2)} SOL
              </div>
            )}
          </div>
        </div>
      )}
      <WalletMultiButton className="!bg-blue-600 hover:!bg-blue-700" />
    </div>
  );
};
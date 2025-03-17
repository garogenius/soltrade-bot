import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet, ArrowUpDown, History, Shield, AlertCircle } from 'lucide-react';
import { mockPortfolio } from '../mockData';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const WalletPage: React.FC = () => {
  const { connected, publicKey, balance } = useWallet();

  // List of supported Solana wallets
  const supportedWallets = [
    { name: 'Phantom', icon: 'https://phantom.app/img/logo.png' },
    { name: 'Solflare', icon: 'https://solflare.com/favicon.ico' },
    { name: 'Ledger', icon: 'https://www.ledger.com/favicon.ico' },
    { name: 'MathWallet', icon: 'https://mathwallet.org/favicon.ico' },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Wallet Connection Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Wallet className="h-6 w-6 mr-2 text-blue-600" />
          Wallet Connection
        </h2>

        {/* List of Supported Wallets */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Supported Wallets
          </h3>
          <div className="flex flex-wrap gap-2">
            {supportedWallets.map((wallet) => (
              <div
                key={wallet.name}
                className="flex items-center bg-gray-100 rounded-lg p-2"
              >
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="h-5 w-5 mr-2"
                />
                <span className="text-sm">{wallet.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet Connection Details */}
        <div className="flex flex-col items-center space-y-4">
          {connected ? (
            <>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Connected
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Wallet Address</div>
                <div className="font-mono text-sm">
                  {publicKey?.toString().slice(0, 4)}...
                  {publicKey?.toString().slice(-4)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Balance</div>
                <div className="text-2xl font-bold">
                  {balance ? (balance / 1e9).toFixed(4) : '0'} SOL
                </div>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-gray-600">
                Connect your wallet to start trading
              </div>
              <WalletMultiButton className="!bg-blue-600 hover:!bg-blue-700" />
            </div>
          )}
        </div>
      </div>

      {/* Portfolio Overview */}
      {connected && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Total Value</h3>
                <ArrowUpDown className="h-5 w-5 text-green-600" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">
                  ${mockPortfolio.totalValue.toFixed(2)}
                </div>
                <div className="text-sm text-green-600">+2.5% today</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">24h Volume</h3>
                <History className="h-5 w-5 text-blue-600" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">$12,450.32</div>
                <div className="text-sm text-gray-600">23 trades</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Risk Level</h3>
                <Shield className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">Medium</div>
                <div className="text-sm text-yellow-600">
                  Based on portfolio diversity
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Performance Chart */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockPortfolio.performance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(timestamp) =>
                      new Date(timestamp).toLocaleDateString()
                    }
                  />
                  <YAxis />
                  <Tooltip
                    labelFormatter={(timestamp) =>
                      new Date(timestamp).toLocaleString()
                    }
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

          {/* Security Recommendations */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
              Security Recommendations
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-medium">Enable Two-Factor Authentication</div>
                  <div className="text-sm text-gray-600">
                    Add an extra layer of security to your account
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <div className="font-medium">Regular Security Audits</div>
                  <div className="text-sm text-gray-600">
                    Review your account activity periodically
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium">Hardware Wallet Support</div>
                  <div className="text-sm text-gray-600">
                    Consider using a hardware wallet for enhanced security
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          
        </>
      )}

      <div>
        <div></div>
        <div>
            <div>
              
            </div>
          </div>
          <div>
            <div>
              <div>
                <br/>
                <br/>
                <br/>
                </div>
            </div>
          </div>

      </div>
    </div>
    
  );
};
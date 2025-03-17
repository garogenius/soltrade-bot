import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Solana Trading Bot
            </h3>
            <p className="mt-2 text-gray-600">
              Professional-grade trading platform for Solana markets. Featuring advanced
              analytics, AI-powered insights, and real-time market data.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Trading Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect
            </h4>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SolTrade Dashboard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
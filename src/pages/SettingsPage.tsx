import React, { useState } from 'react';
import {
  Bell,
  Moon,
  Sun,
  Mail,
  MessageSquare,
  Brain,
  Shield,
  Settings as SettingsIcon,
} from 'lucide-react';
import { UserSettings } from '../types';

export const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings>({
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      telegram: false,
    },
    tradingPreferences: {
      defaultPair: 'SOL/USDC',
      defaultTimeframe: '1h',
      riskLevel: 'medium',
      autoTrade: false,
    },
    aiSettings: {
      minimumConfidence: 0.75,
      autoExecute: false,
      notifySignals: true,
    },
  });

  const handleSettingChange = (
    category: keyof UserSettings,
    setting: string,
    value: any
  ) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <SettingsIcon className="h-6 w-6 text-gray-600" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        <div className="space-y-8">
          {/* Theme Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Moon className="h-5 w-5 mr-2" />
              Theme
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  handleSettingChange('theme', 'theme', 'light')
                }
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  settings.theme === 'light'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
              </button>
              <button
                onClick={() => handleSettingChange('theme', 'theme', 'dark')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  settings.theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={(e) =>
                    handleSettingChange(
                      'notifications',
                      'email',
                      e.target.checked
                    )
                  }
                  className="rounded text-blue-600"
                />
                <Mail className="h-4 w-4" />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={(e) =>
                    handleSettingChange(
                      'notifications',
                      'push',
                      e.target.checked
                    )
                  }
                  className="rounded text-blue-600"
                />
                <Bell className="h-4 w-4" />
                <span>Push Notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.notifications.telegram}
                  onChange={(e) =>
                    handleSettingChange(
                      'notifications',
                      'telegram',
                      e.target.checked
                    )
                  }
                  className="rounded text-blue-600"
                />
                <MessageSquare className="h-4 w-4" />
                <span>Telegram Notifications</span>
              </label>
            </div>
          </div>

          {/* Trading Preferences */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Trading Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Trading Pair
                </label>
                <select
                  value={settings.tradingPreferences.defaultPair}
                  onChange={(e) =>
                    handleSettingChange(
                      'tradingPreferences',
                      'defaultPair',
                      e.target.value
                    )
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="SOL/USDC">SOL/USDC</option>
                  <option value="RAY/USDC">RAY/USDC</option>
                  <option value="SRM/USDC">SRM/USDC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Risk Level
                </label>
                <select
                  value={settings.tradingPreferences.riskLevel}
                  onChange={(e) =>
                    handleSettingChange(
                      'tradingPreferences',
                      'riskLevel',
                      e.target.value
                    )
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.tradingPreferences.autoTrade}
                  onChange={(e) =>
                    handleSettingChange(
                      'tradingPreferences',
                      'autoTrade',
                      e.target.checked
                    )
                  }
                  className="rounded text-blue-600"
                />
                <span>Enable Auto-Trading</span>
              </label>
            </div>
          </div>

          {/* AI Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2" />
              AI Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Confidence (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.aiSettings.minimumConfidence * 100}
                  onChange={(e) =>
                    handleSettingChange(
                      'aiSettings',
                      'minimumConfidence',
                      parseInt(e.target.value) / 100
                    )
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-600">
                  {(settings.aiSettings.minimumConfidence * 100).toFixed(0)}%
                </div>
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.aiSettings.autoExecute}
                  onChange={(e) =>
                    handleSettingChange(
                      'aiSettings',
                      'autoExecute',
                      e.target.checked
                    )
                  }
                  className="rounded text-blue-600"
                />
                <span>Auto-Execute AI Signals</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.aiSettings.notifySignals}
                  onChange={(e) =>
                    handleSettingChange(
                      'aiSettings',
                      'notifySignals',
                      e.target.checked
                    )
                  }
                  className="rounded text-blue-600"
                />
                <span>Notify on New Signals</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
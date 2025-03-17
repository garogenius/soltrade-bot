import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Activity,
  BarChart2,
  Brain,
  Briefcase,
  Wallet,
  Newspaper as News,
  User,
} from 'lucide-react';

import UserProfileModal from './UserProfileModal';

interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  // Check if the current path matches the given path
  const isActive = (path: string) => location.pathname === path;

  // Navigation items
  const navItems: NavItem[] = [
    { path: '/', icon: Activity, label: 'Trading' },
    { path: '/wallet', icon: Wallet, label: 'Wallet' },
    { path: '/portfolio', icon: Briefcase, label: 'Portfolio' },
    { path: '/ai-signals', icon: Brain, label: 'AI Signals' },
    { path: '/analysis', icon: BarChart2, label: 'Analysis' },
    { path: '/news', icon: News, label: 'News' },
  ];

  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
      {/* Mobile Navigation (Bottom Navbar) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg sm:hidden">
        <div className="flex justify-around">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center py-2 text-sm font-medium ${
                isActive(path)
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
          {/* User Profile Icon (Mobile) */}
          <button
            onClick={() => setIsProfileModalOpen(true)}
            className="flex flex-col items-center py-2 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>

      {/* Desktop Navigation (Top Navbar) */}
      <nav className="hidden sm:block bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-8">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-4 text-sm font-medium ${
                    isActive(path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
            {/* User Profile Icon (Desktop) */}
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              <User className="h-5 w-5 mr-2" />
              Profile
            </button>
          </div>
        </div>
      </nav>

      {/* User Profile Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
};
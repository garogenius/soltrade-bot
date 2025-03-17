import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { TradingChart } from './components/TradingChart';
import { OrderBook } from './components/OrderBook';
import { TradeHistory } from './components/TradeHistory';
import { TradingForm } from './components/TradingForm';
import { AISignals } from './components/AISignals';
import { Portfolio } from './components/Portfolio';
import { TechnicalAnalysis } from './components/TechnicalAnalysis';
import { NewsSection } from './components/NewsSection';
import { WalletPage } from './pages/WalletPage';
import { AISignalsPage } from './pages/AISignalsPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { SettingsPage } from './pages/SettingsPage';
import { WalletConnect } from './components/WalletConnect';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {
  mockPriceHistory,
  mockOrderBook,
  mockTrades,
  mockAISignals,
  mockPortfolio,
  mockTechnicalIndicators,
  mockNews,
} from './mockData';
import UpdateUserPage from './pages/UpdateUserPage';
import Leaderboard from './components/Leaderboard';
import Rewards from './components/Rewards';
import GameSection from './components/GameSection';

// Demo data
const mockLeaderboard = [
  { name: 'Alice', profit: 1000 },
  { name: 'Bob', profit: 800 },
  { name: 'Charlie', profit: 600 },
];

const mockRewards = [
  { name: 'First Trade', points: 100 },
  { name: '10 Trades in a Day', points: 500 },
];

const mockGameData = {
  level: 5,
  experience: 1200,
  nextLevel: 2000,
  games: [
    { id: 1, name: 'Trading Master', progress: 75, reward: '500 XP' },
    { id: 2, name: 'Risk Taker', progress: 50, reward: '300 XP' },
    { id: 3, name: 'Portfolio Builder', progress: 90, reward: '700 XP' },
    { id: 4, name: 'AI Trader', progress: 30, reward: '200 XP' },
    { id: 5, name: 'Market Analyst', progress: 60, reward: '400 XP' },
    { id: 6, name: 'DeFi Explorer', progress: 85, reward: '600 XP' },
  ],
};

const TradingPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Price Chart
          </h2>
          <TradingChart data={mockPriceHistory} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Game Progress</h2>
          <GameSection gameData={mockGameData} />
        </div>
        <AISignals signals={mockAISignals} />
        <TradeHistory trades={mockTrades} />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <WalletConnect />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Place Order</h2>
          <TradingForm />
        </div>
        <OrderBook orderBook={mockOrderBook} />
        <TechnicalAnalysis indicators={mockTechnicalIndicators} />
        <Leaderboard leaderboard={mockLeaderboard} />
        <Rewards rewards={mockRewards} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  // Define routes where Navigation and Footer should not be displayed
  const hideNavAndFooterRoutes = ['/login', '/register'];

  // Check if the current route is in the hideNavAndFooterRoutes array
  const shouldHideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Conditionally render the Navigation */}
      {!shouldHideNavAndFooter && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">
                  SolTrade
                </h1>
              </div>
              <WalletConnect />
            </div>
          </div>
        </header>
      )}

      {/* Conditionally render the Navigation */}
      {!shouldHideNavAndFooter && <Navigation />}

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<TradingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/portfolio" element={<Portfolio portfolio={mockPortfolio} />} />
          <Route path="/ai-signals" element={<AISignalsPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/update-user" element={<UpdateUserPage />} />
          <Route path="/news" element={<NewsSection news={mockNews} />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>

      {/* Conditionally render the Footer */}
      {!shouldHideNavAndFooter && <Footer />}
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
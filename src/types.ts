export interface Trade {
  id: string;
  pair: string;
  type: 'buy' | 'sell';
  price: number;
  amount: number;
  total: number;
  timestamp: number;
}

export interface OrderBook {
  bids: [number, number][];
  asks: [number, number][];
}

export interface PriceData {
  timestamp: number;
  price: number;
  volume?: number;
  high?: number;
  low?: number;
  open?: number;
  close?: number;
}

export interface AISignal {
  timestamp: number;
  action: 'buy' | 'sell' | 'hold';
  confidence: number;
  reason: string;
}

export interface Portfolio {
  totalValue: number;
  solBalance: number;
  usdcBalance: number;
  positions: Position[];
  performance: PerformanceMetric[];
}

export interface Position {
  pair: string;
  amount: number;
  averagePrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercentage: number;
}

export interface PerformanceMetric {
  timestamp: number;
  value: number;
  change: number;
}

export interface TechnicalIndicator {
  name: string;
  value: number;
  signal: 'buy' | 'sell' | 'neutral';
  timestamp: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  timestamp: number;
}

export interface Token {
  symbol: string;
  name: string;
  logoUrl: string;
  price: number;
  priceChange: number;
  volume24h: number;
  marketCap: number;
  aiPrediction: {
    sentiment: 'bullish' | 'bearish' | 'neutral';
    summary: string;
  };
}

export interface AIPrediction {
  pair: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  priceTarget: number;
  confidence: number;
  analysis: string;
  timestamp: number;
  priceProjection: {
    timestamp: number;
    actual: number;
    predicted: number;
  }[];
}

export interface CopyTrader {
  id: string;
  name: string;
  avatar: string;
  totalProfit: number;
  profitPercentage: number;
  followers: number;
  winRate: number;
  trades: number;
  performance: PerformanceMetric[];
}

export interface ChartConfig {
  type: 'candlestick' | 'line' | 'area' | 'bar';
  timeframe: '1m' | '5m' | '15m' | '1h' | '4h' | '1d';
  indicators: string[];
  overlays: string[];
}

export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: {
    email: boolean;
    push: boolean;
    telegram: boolean;
  };
  tradingPreferences: {
    defaultPair: string;
    defaultTimeframe: string;
    riskLevel: 'low' | 'medium' | 'high';
    autoTrade: boolean;
  };
  aiSettings: {
    minimumConfidence: number;
    autoExecute: boolean;
    notifySignals: boolean;
  };
}
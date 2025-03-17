import { Trade, OrderBook, PriceData, AISignal, Portfolio, TechnicalIndicator, NewsItem, Token, AIPrediction } from './types';

export const mockTrades: Trade[] = [
  {
    id: '1',
    pair: 'SOL/USDC',
    type: 'buy',
    price: 125.45,
    amount: 2.5,
    total: 313.625,
    timestamp: Date.now() - 300000,
  },
  {
    id: '2',
    pair: 'SOL/USDC',
    type: 'sell',
    price: 126.30,
    amount: 1.8,
    total: 227.34,
    timestamp: Date.now() - 600000,
  },
  {
    id: '3',
    pair: 'SOL/USDC',
    type: 'buy',
    price: 124.80,
    amount: 3.2,
    total: 399.36,
    timestamp: Date.now() - 900000,
  },
];

export const mockOrderBook: OrderBook = {
  bids: [
    [125.40, 4.5],
    [125.35, 2.8],
    [125.30, 6.2],
    [125.25, 3.1],
    [125.20, 5.4],
  ],
  asks: [
    [125.50, 3.2],
    [125.55, 4.1],
    [125.60, 2.7],
    [125.65, 5.3],
    [125.70, 3.8],
  ],
};

export const mockPriceHistory: PriceData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: Date.now() - i * 3600000,
  price: 125 + Math.sin(i) * 2 + Math.random(),
  volume: 1000 + Math.random() * 500,
  high: 127 + Math.random(),
  low: 123 + Math.random(),
  open: 125 + Math.random(),
  close: 125 + Math.random(),
})).reverse();

export const mockAISignals: AISignal[] = [
  {
    timestamp: Date.now() - 1800000,
    action: 'buy',
    confidence: 0.85,
    reason: 'Strong bullish pattern detected with increasing volume and positive momentum',
  },
  {
    timestamp: Date.now() - 3600000,
    action: 'hold',
    confidence: 0.65,
    reason: 'Market consolidation phase, waiting for clearer signals',
  },
  {
    timestamp: Date.now() - 7200000,
    action: 'sell',
    confidence: 0.75,
    reason: 'Bearish divergence identified with overbought conditions',
  },
];

export const mockPortfolio: Portfolio = {
  totalValue: 25000,
  solBalance: 150,
  usdcBalance: 5000,
  positions: [
    {
      pair: 'SOL/USDC',
      amount: 50,
      averagePrice: 120,
      currentPrice: 125.45,
      pnl: 272.5,
      pnlPercentage: 4.54,
    },
    {
      pair: 'SOL/USDC',
      amount: 30,
      averagePrice: 115,
      currentPrice: 125.45,
      pnl: 313.5,
      pnlPercentage: 9.09,
    },
  ],
  performance: Array.from({ length: 30 }, (_, i) => ({
    timestamp: Date.now() - i * 86400000,
    value: 25000 + Math.sin(i) * 1000 + i * 100,
    change: (Math.sin(i) * 1000 + i * 100) / 250,
  })).reverse(),
};

export const mockTechnicalIndicators: TechnicalIndicator[] = [
  {
    name: 'RSI (14)',
    value: 65.5,
    signal: 'neutral',
    timestamp: Date.now(),
  },
  {
    name: 'MACD',
    value: 0.45,
    signal: 'buy',
    timestamp: Date.now(),
  },
  {
    name: 'Moving Average (50)',
    value: 122.30,
    signal: 'buy',
    timestamp: Date.now(),
  },
  {
    name: 'Bollinger Bands',
    value: 125.45,
    signal: 'neutral',
    timestamp: Date.now(),
  },
];

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Solana Network Achieves New Transaction Speed Record',
    summary: 'The Solana blockchain has reached a new milestone in transaction processing speed, handling over 100,000 TPS in recent tests.',
    source: 'CryptoNews',
    url: '#',
    sentiment: 'positive',
    timestamp: Date.now() - 3600000,
  },
  {
    id: '2',
    title: 'Major DeFi Protocol Launches on Solana',
    summary: 'A leading decentralized finance protocol has announced its expansion to the Solana ecosystem, bringing new opportunities for traders.',
    source: 'DeFi Daily',
    url: '#',
    sentiment: 'positive',
    timestamp: Date.now() - 7200000,
  },
  {
    id: '3',
    title: 'Market Analysis: SOL Price Consolidation',
    summary: 'Technical analysts suggest SOL is entering a period of consolidation after recent price movements.',
    source: 'Trading View',
    url: '#',
    sentiment: 'neutral',
    timestamp: Date.now() - 10800000,
  },
];

export const mockTokens: Token[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    price: 125.45,
    priceChange: 5.2,
    volume24h: 1500000000,
    marketCap: 52000000000,
    aiPrediction: {
      sentiment: 'bullish',
      summary: 'Strong buy signal with increasing institutional interest',
    },
  },
  {
    symbol: 'RAY',
    name: 'Raydium',
    logoUrl: 'https://cryptologos.cc/logos/raydium-ray-logo.png',
    price: 2.45,
    priceChange: -1.8,
    volume24h: 25000000,
    marketCap: 450000000,
    aiPrediction: {
      sentiment: 'neutral',
      summary: 'Consolidation phase expected in the short term',
    },
  },
  {
    symbol: 'SRM',
    name: 'Serum',
    logoUrl: 'https://cryptologos.cc/logos/serum-srm-logo.png',
    price: 1.20,
    priceChange: 3.5,
    volume24h: 15000000,
    marketCap: 320000000,
    aiPrediction: {
      sentiment: 'bullish',
      summary: 'Technical breakout imminent with high volume',
    },
  },
];

export const mockAIPredictions: AIPrediction[] = [
  {
    pair: 'SOL/USDC',
    sentiment: 'bullish',
    priceTarget: 135.50,
    confidence: 0.85,
    analysis: 'Strong momentum indicators with increasing institutional buying pressure. Key resistance levels have been broken with high volume.',
    timestamp: Date.now(),
    priceProjection: Array.from({ length: 24 }, (_, i) => ({
      timestamp: Date.now() + i * 3600000,
      actual: 125.45 + Math.sin(i) * 2,
      predicted: 125.45 + Math.sin(i) * 2 + i * 0.5,
    })),
  },
  {
    pair: 'RAY/USDC',
    sentiment: 'neutral',
    priceTarget: 2.50,
    confidence: 0.65,
    analysis: 'Market showing signs of consolidation. Wait for clearer directional signals before taking positions.',
    timestamp: Date.now(),
    priceProjection: Array.from({ length: 24 }, (_, i) => ({
      timestamp: Date.now() + i * 3600000,
      actual: 2.45 + Math.sin(i) * 0.05,
      predicted: 2.45 + Math.sin(i) * 0.05 + i * 0.01,
    })),
  },
];
// src/trading/bot.ts
import fetchHistoricalData from '../ai/fetchData';
import { loadModel, predictPrice } from '../ai/model';
import executeTrade from './executeTrade';

const tradingBot = async (symbol: string = 'solana'): Promise<void> => {
  const historicalData = await fetchHistoricalData(symbol);
  const model = await loadModel();
  const predictedPrice = await predictPrice(model, historicalData.map((d) => [d.price]));

  const currentPrice = historicalData[historicalData.length - 1].price;
  if (predictedPrice > currentPrice) {
    await executeTrade(symbol, 'buy');
  } else {
    await executeTrade(symbol, 'sell');
  }
};

export default tradingBot;
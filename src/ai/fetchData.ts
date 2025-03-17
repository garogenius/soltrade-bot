// src/ai/fetchData.ts
import axios from 'axios';

interface HistoricalData {
  timestamp: number;
  price: number;
}

const fetchHistoricalData = async (symbol: string, days: number = 30): Promise<HistoricalData[]> => {
  const url = `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=${days}`;
  const response = await axios.get(url);
  return response.data.prices.map(([timestamp, price]: [number, number]) => ({ timestamp, price }));
};

export default fetchHistoricalData;
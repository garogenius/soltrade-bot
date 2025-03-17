import axios from 'axios';

// Fetch market data
export const getMarketData = async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const price = response.data.solana.usd;
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
};
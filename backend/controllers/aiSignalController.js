import AISignal from '../models/AISignal.js';

// Fetch AI signals
export const getSignals = async (req, res) => {
  try {
    const signals = await AISignal.find().sort({ timestamp: -1 }).limit(10);
    res.json({ signals });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch AI signals' });
  }
};
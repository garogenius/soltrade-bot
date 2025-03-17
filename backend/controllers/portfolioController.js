import User from '../models/User.js';

// Fetch user portfolio
export const getPortfolio = async (req, res) => {
  const { publicKey } = req.user;

  try {
    const user = await User.findOne({ publicKey });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ portfolio: user.portfolio });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio' });
  }
};
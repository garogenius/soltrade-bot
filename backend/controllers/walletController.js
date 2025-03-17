import User from '../models/User.js';
import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection(process.env.SOLANA_RPC_URL);

// Fetch wallet balance
export const getBalance = async (req, res) => {
  const { publicKey } = req.user;

  try {
    const balance = await connection.getBalance(new PublicKey(publicKey));
    res.json({ balance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch balance' });
  }
};

// Deposit funds (mock implementation)
export const deposit = async (req, res) => {
  const { publicKey } = req.user;
  const { amount } = req.body;

  try {
    const user = await User.findOne({ publicKey });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.balance += amount;
    await user.save();

    res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to deposit funds' });
  }
};

// Withdraw funds (mock implementation)
export const withdraw = async (req, res) => {
  const { publicKey } = req.user;
  const { amount } = req.body;

  try {
    const user = await User.findOne({ publicKey });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    user.balance -= amount;
    await user.save();

    res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ error: 'Failed to withdraw funds' });
  }
};
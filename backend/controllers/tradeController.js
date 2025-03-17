import User from '../models/User.js';
import Trade from '../models/Trade.js';
import { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js';

const connection = new Connection(process.env.SOLANA_RPC_URL);

// Place a buy order
export const buy = async (req, res) => {
  const { publicKey } = req.user;
  const { amount } = req.body;

  try {
    const user = await User.findOne({ publicKey });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Mock transaction (replace with actual Solana transaction logic)
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(publicKey),
        toPubkey: new PublicKey('RECIPIENT_PUBLIC_KEY'), // Replace with actual recipient
        lamports: amount * 1e9, // Convert SOL to lamports
      })
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [new PublicKey(publicKey)]);

    // Save trade to database
    const trade = new Trade({
      userPublicKey: publicKey,
      symbol: 'SOL',
      action: 'buy',
      amount,
      price: amount, // Replace with actual price logic
    });
    await trade.save();

    res.json({ signature });
  } catch (error) {
    res.status(500).json({ error: 'Failed to place buy order' });
  }
};

// Fetch trade history
export const getTradeHistory = async (req, res) => {
  const { publicKey } = req.user;

  try {
    const trades = await Trade.find({ userPublicKey: publicKey }).sort({ timestamp: -1 });
    res.json({ trades });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trade history' });
  }
};
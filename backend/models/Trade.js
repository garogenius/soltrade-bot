import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
  userPublicKey: { type: String, required: true }, // Public key of the user
  symbol: { type: String, required: true }, // Trading symbol (e.g., SOL)
  action: { type: String, enum: ['buy', 'sell'], required: true }, // Buy or sell
  amount: { type: Number, required: true }, // Amount of the asset
  price: { type: Number, required: true }, // Price at which the trade was executed
  timestamp: { type: Date, default: Date.now }, // Timestamp of the trade
});

const Trade = mongoose.model('Trade', tradeSchema);
export default Trade;
import mongoose from 'mongoose';

const aiSignalSchema = new mongoose.Schema({
  symbol: { type: String, required: true }, // Trading symbol (e.g., SOL)
  action: { type: String, enum: ['buy', 'sell'], required: true }, // Buy or sell
  confidence: { type: Number, required: true }, // Confidence level of the signal
  timestamp: { type: Date, default: Date.now }, // Timestamp of the signal
});

const AISignal = mongoose.model('AISignal', aiSignalSchema);
export default AISignal; // Use export default
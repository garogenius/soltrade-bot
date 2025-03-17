import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import walletRoutes from './routes/walletRoutes.js';
import tradeRoutes from './routes/tradeRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import aiSignalRoutes from './routes/aiSignalRoutes.js';
import marketDataRoutes from './routes/marketDataRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/wallet', walletRoutes); // Wallet management routes
app.use('/api/trade', tradeRoutes); // Trading routes
app.use('/api/portfolio', portfolioRoutes); // Portfolio routes
app.use('/api/ai-signals', aiSignalRoutes); // AI signals routes
app.use('/api/market-data', marketDataRoutes); // Market data routes
app.use('/api/news', newsRoutes); // News routes

// Protected route example
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route.', user: req.user });
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
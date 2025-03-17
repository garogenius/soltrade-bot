import express from 'express';
import { buy, getTradeHistory } from '../controllers/tradeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Place a buy order
router.post('/buy', authMiddleware, buy);

// Fetch trade history
router.get('/history', authMiddleware, getTradeHistory);

export default router;
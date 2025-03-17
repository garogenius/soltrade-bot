import express from 'express';
import { getMarketData } from '../controllers/marketDataController.js';

const router = express.Router();

// Fetch market data
router.get('/', getMarketData);

export default router;
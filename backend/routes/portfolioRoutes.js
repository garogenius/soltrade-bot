import express from 'express';
import { getPortfolio } from '../controllers/portfolioController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Fetch user portfolio
router.get('/', authMiddleware, getPortfolio);

export default router;
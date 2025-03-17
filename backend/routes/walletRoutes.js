import express from 'express';
import { getBalance, deposit, withdraw } from '../controllers/walletController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Fetch wallet balance
router.get('/balance', authMiddleware, getBalance);

// Deposit funds
router.post('/deposit', authMiddleware, deposit);

// Withdraw funds
router.post('/withdraw', authMiddleware, withdraw);

export default router;
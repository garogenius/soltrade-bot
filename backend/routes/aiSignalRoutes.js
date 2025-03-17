import express from 'express';
import { getSignals } from '../controllers/aiSignalController.js';

const router = express.Router();

// Fetch AI signals
router.get('/', getSignals);

export default router;
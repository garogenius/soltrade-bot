const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = process.env.PORT || 3000;

// Replace with your Telegram bot token
const token = '8093680234:AAEg2S3yTd31Shgr8-89pzDEINT_AT7JHv8';
const bot = new TelegramBot(token, { polling: true });

const ngrokUrl = 'https://abcd1234.ngrok.io'; // Replace with your ngrok URL
bot.setWebHook(`${ngrokUrl}/bot${token}`);
// Mock data (replace with your actual data or API calls)
const mockPriceHistory = [
  { time: '2023-10-01', price: 100 },
  { time: '2023-10-02', price: 105 },
];

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Welcome to SolTrade Bot! Use the following commands:
    /price - Get current price
    /portfolio - View your portfolio
    /ai_signals - Get AI trading signals
    /analysis - Technical analysis
    /news - Latest news
    /settings - Bot settings`
  );
});

// Handle /price command
bot.onText(/\/price/, (msg) => {
  const chatId = msg.chat.id;
  const latestPrice = mockPriceHistory[mockPriceHistory.length - 1].price;
  bot.sendMessage(chatId, `Current price: $${latestPrice}`);
});

// Handle /portfolio command
bot.onText(/\/portfolio/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Your portfolio: $10,000`);
});

// Handle /ai_signals command
bot.onText(/\/ai_signals/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `AI Signals: Buy SOL at $100`);
});

// Handle /analysis command
bot.onText(/\/analysis/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Technical Analysis: Bullish trend detected`);
});

// Handle /news command
bot.onText(/\/news/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Latest News: Solana announces new partnership`);
});

// Handle /settings command
bot.onText(/\/settings/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Bot Settings: Notifications enabled`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/api/price', (req, res) => {
    res.json(mockPriceHistory);
  });
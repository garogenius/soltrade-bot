import axios from 'axios';

// Fetch news
export const getNews = async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything?q=solana&apiKey=YOUR_NEWS_API_KEY');
    const news = response.data.articles;
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
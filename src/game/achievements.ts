// src/game/achievements.ts
interface User {
    name: string;
    trades: { action: 'buy' | 'sell'; price: number }[];
  }
  
  const achievements = {
    firstTrade: false,
    tenTrades: false,
  };
  
  const checkAchievements = (user: User): void => {
    if (user.trades.length === 1 && !achievements.firstTrade) {
      console.log('Achievement Unlocked: First Trade!');
      achievements.firstTrade = true;
    }
    if (user.trades.length >= 10 && !achievements.tenTrades) {
      console.log('Achievement Unlocked: 10 Trades in a Day!');
      achievements.tenTrades = true;
    }
  };
  
  export default checkAchievements;
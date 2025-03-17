// src/game/leaderboard.ts
interface LeaderboardEntry {
    name: string;
    profit: number;
  }
  
  const leaderboard: LeaderboardEntry[] = [];
  
  const updateLeaderboard = (user: { name: string }, profit: number): void => {
    leaderboard.push({ name: user.name, profit });
    leaderboard.sort((a, b) => b.profit - a.profit);
    console.log('Updated Leaderboard:', leaderboard);
  };
  
  export default updateLeaderboard;
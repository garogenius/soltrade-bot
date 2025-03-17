// src/components/Leaderboard.tsx
import React from 'react';

interface LeaderboardEntry {
  name: string;
  profit: number;
}

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Profit</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{entry.name}</td>
              <td className="py-2">${entry.profit.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
// src/components/Rewards.tsx
import React from 'react';

interface Reward {
  name: string;
  points: number;
}

interface RewardsProps {
  rewards: Reward[];
}

const Rewards: React.FC<RewardsProps> = ({ rewards }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Rewards</h2>
      <div className="space-y-4">
        {rewards.map((reward, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <span>{reward.name}</span>
            <span className="text-sm text-gray-600">{reward.points} points</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
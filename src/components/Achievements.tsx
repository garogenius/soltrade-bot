// src/components/Achievements.tsx
import React, { useEffect, useState } from 'react';

interface Achievement {
  name: string;
  unlocked: boolean;
}

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    { name: 'First Trade', unlocked: false },
    { name: '10 Trades in a Day', unlocked: false },
  ]);

  useEffect(() => {
    // Simulate fetching achievements from the backend
    const fetchAchievements = async () => {
      const response = await fetch('/api/achievements'); // Replace with your API endpoint
      const data = await response.json();
      setAchievements(data);
    };

    fetchAchievements();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span
              className={`w-6 h-6 rounded-full ${
                achievement.unlocked ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></span>
            <span>{achievement.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
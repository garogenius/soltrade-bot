// src/components/GameSection.tsx
import React from 'react';

interface GameData {
  level: number;
  experience: number;
  nextLevel: number;
  games: {
    id: number;
    name: string;
    progress: number;
    reward: string;
  }[];
}

interface GameSectionProps {
  gameData: GameData;
}

const GameSection: React.FC<GameSectionProps> = ({ gameData }) => {
  const progress = (gameData.experience / gameData.nextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* Level Progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Level {gameData.level}</span>
          <span className="text-sm text-gray-600">
            {gameData.experience}/{gameData.nextLevel} XP
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Game Types */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Active Games</h3>
        {gameData.games.map((game) => (
          <div key={game.id} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-medium">{game.name}</span>
              <span className="text-sm text-gray-600">{game.reward}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${game.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSection;
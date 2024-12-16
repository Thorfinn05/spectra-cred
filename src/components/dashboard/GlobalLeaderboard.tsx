import React from 'react';

const leaderboardData = [
  { rank: 1, name: 'Alex Thompson', points: 3200, avatar: 'AT' },
  { rank: 2, name: 'Sarah Chen', points: 3150, avatar: 'SC' },
  { rank: 3, name: 'Mike Johnson', points: 3000, avatar: 'MJ' },
  { rank: 4, name: 'Emma Davis', points: 2900, avatar: 'ED' },
  { rank: 5, name: 'You', points: 2450, avatar: 'ME', isUser: true },
];

// Export the component as a React Functional Component
const GlobalLeaderboard: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Global Leaderboard</h2>
      <div className="space-y-4">
        {leaderboardData.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center space-x-4 p-3 rounded-lg ${
              user.isUser
                ? 'bg-cyan-900/30 border border-cyan-500/30'
                : 'bg-gray-700/30'
            }`}
          >
            <span className="text-lg font-semibold text-gray-300">#{user.rank}</span>
            <div className="flex-1 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-medium">
                {user.avatar}
              </div>
              <span className={user.isUser ? 'text-cyan-400' : 'text-gray-300'}>
                {user.name}
              </span>
            </div>
            <span className="font-semibold text-cyan-400">{user.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the component so it can be used elsewhere
export default GlobalLeaderboard;

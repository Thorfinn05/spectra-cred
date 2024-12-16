import React from 'react';
import { useCredentials } from '@/hooks/useCredentials';
export const CredentialStats: React.FC = () => {
  const { credentials } = useCredentials();

  const stats = [
    { name: 'Total Certificates', value: credentials?.length || 0 },
    { name: 'Skill Points', value: '2,450' },
    { name: 'Global Rank', value: '#125' },
    { name: 'Verified Badges', value: '8' },
  ];

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Credential Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-gray-700/50 p-4 rounded-lg">
            <dt className="text-sm text-gray-300">{stat.name}</dt>
            <dd className="text-2xl font-bold text-cyan-400">{stat.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};
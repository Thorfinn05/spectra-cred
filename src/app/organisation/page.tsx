/* eslint-disable @next/next/no-img-element */
import React from 'react';

const organizations = [
  {
    name: 'Tech University',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TU',
    type: 'Educational Institution',
    credentials: 5
  },
  {
    name: 'CodeAcademy',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=CA',
    type: 'Training Provider',
    credentials: 3
  },
  {
    name: 'DataCamp',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=DC',
    type: 'Online Learning Platform',
    credentials: 4
  }
];

const Organizations: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h2 className="text-2xl font-bold text-white mb-6">Connected Organizations</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org) => (
            <div key={org.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src={org.logo}
                  alt={org.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{org.name}</h3>
                  <p className="text-sm text-gray-500">{org.type}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  {org.credentials} credentials issued
                </p>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Organizations;
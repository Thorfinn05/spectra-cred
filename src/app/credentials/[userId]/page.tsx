// 'use client';

// import { useUser } from '@clerk/nextjs';

// const UserCredentials: React.FC = () => {
//   const { user } = useUser();

//   return (
//     <div>
//       <h1>Credentials Page</h1>
//       {user ? (
//         <p>User ID: {user.fullName}</p>
//       ) : (
//         <p>Loading user information...</p>
//       )}
//     </div>
//   );
// };

// export default UserCredentials;
'use client'
import React from 'react';


import { useUser } from '@clerk/nextjs';



 
  const Badges: React.FC = () => {
    const { user } = useUser();
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
      <h1>Credentials Page</h1>
     {user ? (
       <p>User ID: {user.fullName}</p>
     ) : (
        <p>Loading user information...</p> )
        }
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Badges</h2>
          <div className="flex space-x-4">
            <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>All Types</option>
              <option>Certificates</option>
              <option>Degrees</option>
              <option>Diplomas</option>
            </select>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>All Status</option>
              <option>Verified</option>
              <option>Pending</option>
              <option>Expired</option>
            </select>
          </div>
        </div>

      </div>
    </main>
  );
};
export default Badges; 

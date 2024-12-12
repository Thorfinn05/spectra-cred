'use client';

import { useUser } from '@clerk/nextjs';

const UserCredentials: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Credentials Page</h1>
      {user ? (
        <p>User ID: {user.fullName}</p>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserCredentials;

'use client'
import { useParams } from 'next/navigation';

interface Params {
  userId: string;
}

const UserCredentials: React.FC = () => {
  const params = useParams<Params>();
  const userId = params.userId;

  return (
    <div>
      <h1>Credentials Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserCredentials;

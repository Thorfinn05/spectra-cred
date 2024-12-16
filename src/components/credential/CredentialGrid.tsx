import React from 'react';
import { Credential } from '../../types/credential';
import { CredentialCard } from './CredentialCard';

interface CredentialGridProps {
  credentials: Credential[];
}

const CredentialGrid: React.FC<CredentialGridProps> = ({ credentials }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {credentials.map((credential) => (
        <CredentialCard key={credential.id} credential={credential} />
      ))}
    </div>
  );
};

export default CredentialGrid; 
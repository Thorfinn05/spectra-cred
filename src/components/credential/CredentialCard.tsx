import React, { useState } from 'react';
import { Credential } from '../../types/credential';
import { CredentialHeader } from './CredentialHeader';
import { CredentialDetails } from './CredentialDetails';
import { CredentialQR } from './CredentialQR';
import { CredentialVerifier } from './CredentialVerifier';

interface CredentialCardProps {
  credential: Credential;
}

const CredentialCard: React.FC<CredentialCardProps> = ({ credential }) => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <CredentialHeader 
        title={credential.title}
        institution={credential.institution}
        status={credential.status}
      />
      <CredentialDetails credential={credential} />
      
      <div className="mt-4 space-y-4">
        <button
          onClick={() => setShowQR(!showQR)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {showQR ? 'Hide QR Code' : 'Show QR Code'}
        </button>
        
        {showQR && <CredentialQR credential={credential} />}
        
        <CredentialVerifier documentHash={credential.documentHash} />
      </div>
    </div>
  );
};

export default CredentialCard;
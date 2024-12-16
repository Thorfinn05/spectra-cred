export interface Credential {
    id: string;
    title: string;
    institution: string;
    issueDate: Date;
    expiryDate?: Date;
    type: 'degree' | 'certificate' | 'diploma';
    status: 'verified' | 'pending' | 'expired';
    description: string;
    documentHash: string;
  }
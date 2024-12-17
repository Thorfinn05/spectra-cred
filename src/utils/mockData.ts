import { Credential } from '../types/credential';

export const mockCredentials: Credential[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    institution: 'Tech University',
    issueDate: new Date('2023-12-15'),
    type: 'certificate',
    status: 'verified',
    description: 'Full-stack web development with React, Node.js, and MongoDB',
    documentHash: '0x1234567890abcdef',
    // skills: ['React', 'Node.js', 'MongoDB', 'TypeScript']
  },
  {
    id: '2',
    title: 'Blockchain Development',
    institution: 'CodeAcademy',
    issueDate: new Date('2024-01-20'),
    type: 'certificate',
    status: 'verified',
    description: 'Smart contract development with Solidity and Web3',
    documentHash: '0xabcdef1234567890',
    // skills: ['Solidity', 'Web3.js', 'Smart Contracts']
  },
  {
    id: '3',
    title: 'Machine Learning Specialization',
    institution: 'DataCamp',
    issueDate: new Date('2024-02-01'),
    type: 'certificate',
    status: 'pending',
    description: 'Advanced machine learning and AI concepts',
    documentHash: '0x9876543210fedcba',
    // skills: ['Python', 'TensorFlow', 'Machine Learning']
  }
];

export const mockEvents = [
  {
    id: '1',
    title: 'Blockchain Developer Bootcamp',
    organization: 'Ethereum Foundation',
    startDate: new Date('2024-03-15'),
    duration: '12 weeks',
    type: 'Course',
    price: 'Free',
    skills: ['Solidity', 'Web3', 'DApp Development']
  },
  {
    id: '2',
    title: 'AI & ML Conference 2024',
    organization: 'TechCon',
    startDate: new Date('2024-04-20'),
    duration: '3 days',
    type: 'Conference',
    price: '$299',
    skills: ['AI', 'Machine Learning', 'Data Science']
  },
  {
    id: '3',
    title: 'Cloud Computing Certification',
    organization: 'AWS',
    startDate: new Date('2024-03-01'),
    duration: '6 weeks',
    type: 'Certification',
    price: '$149',
    skills: ['AWS', 'Cloud Architecture', 'DevOps']
  }
];

export const mockDocuments = {
  personal: [
    {
      id: '1',
      title: 'Resume',
      type: 'PDF',
      lastUpdated: new Date('2024-01-15'),
      verified: true
    },
    {
      id: '2',
      title: 'Portfolio',
      type: 'Website',
      lastUpdated: new Date('2024-02-01'),
      verified: true
    }
  ],
  academic: [
    {
      id: '3',
      title: 'Bachelor\'s Degree',
      type: 'PDF',
      lastUpdated: new Date('2023-12-20'),
      verified: true
    },
    {
      id: '4',
      title: 'Transcripts',
      type: 'PDF',
      lastUpdated: new Date('2023-12-20'),
      verified: true
    }
  ],
  certificates: mockCredentials
};



export const mockResults = {
  organizations: ['Tech University', 'Ethereum Foundation', 'AWS'],
  skills: ['React', 'Node.js', 'Solidity', 'Machine Learning'],
  education: ['Bachelor\'s in Computer Science', 'Certified Blockchain Developer'],
  jobTitles: ['Web Developer', 'Blockchain Developer', 'AI Engineer'],
  skillPercentages: {
    'React': 80,
    'NodeJS': 75,
    'Solidity': 90,
    'Machine Learning': 60,
  },
  tokenReward: 150,
};


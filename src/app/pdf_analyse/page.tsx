/* eslint-disable react-hooks/rules-of-hooks */
   'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { mockResults } from '@/utils/mockData';

interface ResultsDisplayProps {
  results: {
    organizations: string[];
    skills: string[];
    education: string[];
    jobTitles: string[];
    skillPercentages: {
      [key: string]: number;
    };
    tokenReward: number;
  };
}

const page: React.FC = ({ results = mockResults }: ResultsDisplayProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
      setIsLoading(true); // Start loader
      setTimeout(() => {
        setIsLoading(false); // Stop loader after 5 seconds
        setIsFileUploaded(true); // Show the rest of the page
        toast.success('File uploaded successfully!');
      }, 5000); // 5-second delay
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const calculateSolReward = (percentages: { [key: string]: number }) => {
    const averagePercentage =
      Object.values(percentages).reduce((sum, value) => sum + value, 0) /
      Object.values(percentages).length;

    if (averagePercentage >= 0 && averagePercentage < 25) {
      return 1;
    } else if (averagePercentage >= 25 && averagePercentage < 50) {
      return 1.5;
    } else if (averagePercentage >= 50 && averagePercentage < 75) {
      return 2;
    } else if (averagePercentage >= 75 && averagePercentage <= 100) {
      return 3;
    }
    return 0;
  };

  const ResultSection = ({ title, items }: { title: string; items: string[] }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-neutral-300">{title}</h3>
        <button
          onClick={() => copyToClipboard(items.join(', '))}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Copy className="w-4 h-4 text-gray-500" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge key={index} variant="secondary" className="animate-fade-in">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );

  const SkillProgressSection = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Skill Development</h3>
      {Object.entries(results.skillPercentages).map(([skill, percentage]) => (
        <div key={skill} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{skill}</span>
            <span>{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
      ))}
    </div>
  );

  const TokenRewardSection = () => {
    const solReward = calculateSolReward(results.skillPercentages);

    return (
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-cyan-500/10 rounded-lg animate-pulse">
          <h3 className="text-lg font-semibold text-white mb-2">Token Rewards</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">Available Airdrop Tokens:</span>
            <span className="text-xl font-bold text-white">{results.tokenReward} TOKENS</span>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">SOL Rewards</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Based on your skill level:</span>
            <span className="text-xl font-bold text-blue-600">{solReward} SOL</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *Rewards: &lt;0-25% = 1 SOL, 25-50% = 1.5 SOL, 50-75% = 2 SOL, 75-100% = 3 SOL
          </p>
          <div className='text-blue-600 text-lg'>
            <br/>
            You are awarded {solReward} SOL, connect with your wallet to see the aquired airdrops.
          </div>
          <Link href="/wallet" className='text-blue-500 text-lg mt-8'>Click here to connect to wallet</Link>
        </div>
      </div>
    );
  };

  return (
    <Card className="p-6 mt-8 animate-slide-in">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Upload Your File</h3>
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-lg"
          />
          {selectedFile && !isLoading && (
            <div className="text-sm text-gray-600 mt-2">
              <span>Uploaded file: {selectedFile.name}</span>
            </div>
          )}
          {/* Show loader while file is being uploaded */}
          {isLoading && (
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
              <span className="text-sm text-gray-600">Uploading...</span>
            </div>
          )}
        </div>

        {/* Show rest of the page content after file upload and loader */}
        {isFileUploaded && (
          <>
            <div className="text-center text-lg font-semibold text-green-500">File Uploaded Successfully!</div>
            <ResultSection title="Organization" items={results.organizations} />
            <ResultSection title="Skills" items={results.skills} />
            <SkillProgressSection />
            <ResultSection title="Education" items={results.education} />
            <ResultSection title="Job Titles" items={results.jobTitles} />
            <TokenRewardSection />
          </>
        )}
      </div>
    </Card>
  );
};

export default page;

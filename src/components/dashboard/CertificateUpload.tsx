import React, { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export const CertificateUpload: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload
    const files = Array.from(e.dataTransfer.files);
    console.log('Uploading files:', files);
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Upload New Certificate</h2>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center ${
          isDragging ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-600 hover:border-gray-500'
        }`}
      >
        <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-300">
          Drag and drop your certificate here, or{' '}
          <button className="text-cyan-400 hover:text-cyan-300">browse files</button>
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Supported formats: PDF, JPG, PNG (max 10MB)
        </p>
      </div>
    </div>
  );
};
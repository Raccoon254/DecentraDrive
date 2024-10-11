// src/pages/Drive.tsx
import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';
import '../App.css'; 

const Drive: React.FC = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadSuccess = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="drive">
      <header className="drive-header">
        <h1>Your Decentralized Drive</h1>
      </header>
      <main className="drive-main">
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        <FileList key={refreshTrigger} />
      </main>
    </div>
  );
};

export default Drive;

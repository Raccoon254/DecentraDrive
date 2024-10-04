// src/pages/Drive.tsx
import React from 'react';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';
import '../App.css'; 

const Drive: React.FC = () => {
  return (
    <div className="drive">
      <header className="drive-header">
        <h1>Your Decentralized Drive</h1>
      </header>
      <main className="drive-main">
        <FileUpload />
        <FileList />
      </main>
    </div>
  );
};

export default Drive;

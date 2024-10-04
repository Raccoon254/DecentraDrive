import React from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Decentralized Drive</h1>
      <FileUpload />
      <FileList />
    </div>
  );
}

export default App;
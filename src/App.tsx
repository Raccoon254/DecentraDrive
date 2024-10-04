import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drive from './pages/Drive';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drive" element={<Drive />} />
    </Routes>
  );
}

export default App;
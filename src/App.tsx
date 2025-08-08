import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/kr" replace />} />
      <Route path="/kr" element={<HomePage language="kr" />} />
      <Route path="/en" element={<HomePage language="en" />} />
      <Route path="*" element={<Navigate to="/kr" replace />} />
    </Routes>
  );
};

export default App;
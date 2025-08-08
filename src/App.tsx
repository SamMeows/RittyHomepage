import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/kr" replace />} />
      <Route path="/kr" element={<LandingPage language="kr" />} />
      <Route path="/en" element={<LandingPage language="en" />} />
      <Route path="*" element={<Navigate to="/kr" replace />} />
    </Routes>
  );
};

export default App;
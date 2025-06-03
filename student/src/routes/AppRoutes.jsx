import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../components/Card';

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Card />} />
    </Routes>
  );
};

export default AppRoutes;

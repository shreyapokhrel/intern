import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../components/Card';
import StudentDetail from '../pages/StudentDetail';
import StudentList from '../pages/StudentList';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="students/:id"element ={<StudentDetail/>}/>
      <Route path="/" element={<Card />} />
      <Route path="students" element={<StudentList />} />
    </Routes>
  );
};

export default AppRoutes;

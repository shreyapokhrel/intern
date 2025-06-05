import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';


import PublicWrapper from './PublicWrapper';
import Home from '../Homepage/Home';          
import StudentList from '../studentpage/StudentList';
import StudentDetail from '../studentpage/StudentDetail';
import EditStudent from '../studentpage/EditStudent';
import CreateStudent from '../studentpage/CreateStudent';
const AppRoutes = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    

      <Routes>
      
        <Route element={<PublicWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="students" element={<StudentList />} />
          <Route path="students/:id" element={<StudentDetail />} />
           <Route path="students/:id/edit" element={<EditStudent/>} />
           <Route path="students/create" element={<CreateStudent />} />

        </Route>
      </Routes>
    </MantineProvider>
  );
};

export default AppRoutes;

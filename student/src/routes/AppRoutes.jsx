import React from "react";
import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import PublicWrapper from "./PublicWrapper";
import Home from "../pages/Homepage/Home";
import StudentList from "../pages/StudentPage/StudentList";
import EditStudent from "../pages/StudentPage/EditStudent";
import CreateStudent from "../pages/StudentPage/CreateStudent";
import StudentDetail from "../pages/studentpage/StudentDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<StudentList />} />
        <Route path="students/:id" element={<StudentDetail />} />
        <Route path="students/:id/edit" element={<EditStudent />} />
        <Route path="students/create" element={<CreateStudent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

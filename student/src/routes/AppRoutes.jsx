import React from "react";
import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

//import PublicWrapper from "./PublicWrapper";
import HomePage from "../features/home/pages/HomePage";
import StudentListPage from "../features/students/pages/StudentListPage";
import EditStudentPage from "../features/students/pages/EditStudentPage";
import CreateStudentPage from "../features/students/pages/CreateStudentPage";
import StudentDetailPage from "../features/students/pages/StudentDetailPage";
import Login from "../features/auth/pages/LoginPage";
import SignUp from "../features/auth/pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/Error404";
import AboutPage from "../features/about/pages/AboutPage";
import AttendancePage from "../features/students/pages/AttendancePage";
import NoticeBoardPage from "../features/students/pages/NoticeBoardPage";
import ContactUsPage from "../features/students/pages/ContactUsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route element={<PublicWrapper />}> */}
      <Route path="/" element={<HomePage />} />

      <Route
        path="students"
        element={
          <PrivateRoute>
            <StudentListPage />
          </PrivateRoute>
        }
      />
      <Route
        path="students/:id"
        element={
          <PrivateRoute>
            <StudentDetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="students/:id/edit"
        element={
          <PrivateRoute>
            <EditStudentPage />
          </PrivateRoute>
        }
      />
      <Route
        path="students/create"
        element={
          <PrivateRoute>
            <CreateStudentPage />
          </PrivateRoute>
        }
      />
      <Route
        path="notices"
        element={
          <PrivateRoute>
            <NoticeBoardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="attendance"
        element={
          <PrivateRoute>
            <AttendancePage />
          </PrivateRoute>
        }
      />
      
      {/* </Route> */}
      <Route path="*" element={<ErrorPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
};

export default AppRoutes;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

//import PublicWrapper from "./PublicWrapper";
import Home from "../features/pages/Homepage/Home";
import StudentList from "../features/pages/StudentPage/StudentList";
import EditStudent from "../features/pages/StudentPage/EditStudent";
import CreateStudent from "../features/pages/StudentPage/CreateStudent";
import StudentDetail from "../features/pages/Studentpage/StudentDetail";
import Login from "../features/pages/Loginpage/Login";
import SignUp from "../features/pages/Signuppage/SignUp";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route element={<PublicWrapper />}> */}
      <Route path="/" element={<Home />} />

      <Route
        path="students"
        element={
          <PrivateRoute>
            <StudentList />
          </PrivateRoute>
        }
      />
      <Route
        path="students/:id"
        element={
          <PrivateRoute>
            <StudentDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="students/:id/edit"
        element={
          <PrivateRoute>
            <EditStudent />
          </PrivateRoute>
        }
      />
      <Route
        path="students/create"
        element={
          <PrivateRoute>
            <CreateStudent />
          </PrivateRoute>
        }
      />
      {/* </Route> */}
    </Routes>
  );
};

export default AppRoutes;

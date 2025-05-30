import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { PostProvider } from './context/PostContext';
import AppRoutes from './routes/AppRoutes';
//import Custom from './components/Custom';
//import UseMemo from './components/UseMemo';
const App = () => (
  //return <UseMemo/>;
   <PostProvider>
    <Router>
      <AppRoutes />
    </Router>
  </PostProvider>
);  
export default App;

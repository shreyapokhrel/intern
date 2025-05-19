 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import PostsPage from '../pages/PostsPage';
import PostDetail from '../components/PostDetail';

const AppRoutes = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  </Router>
);

export default AppRoutes;
 

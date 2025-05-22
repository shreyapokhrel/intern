import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/Postpage/PostDetail";
import PostsPage from "../pages/Postpage/PostsPage";
import CreatePostPage from "../pages/Postpage/CreatePostPage";
import EditPostPage from "../pages/Postpage/EditPostPage";
import { MantineProvider } from '@mantine/core';

const AppRoutes = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
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
          <Route path="/posts/create" element={<CreatePostPage />} />
          <Route path="/posts/:id/edit" element={<EditPostPage />} />
        </Routes>
      </div>
    </Router>
  </MantineProvider>
);

export default AppRoutes;

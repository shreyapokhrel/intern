import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/Postpage1/PostDetail";
import PostsPage from "../pages/Postpage1/PostsPage";
import CreatePostPage from "../pages/Postpage1/CreatePostPage";
import EditPostPage from "../pages/Postpage1/EditPostPage";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"; 
const AppRoutes = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts" style={{ marginLeft: "1rem" }}>
        Posts
      </Link>
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
  </MantineProvider>
);

export default AppRoutes;

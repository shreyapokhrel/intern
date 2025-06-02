import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail1 from "../pages/Postpage2/PostDetail1";
import PostsPage1 from "../pages/Postpage2/PostsPage1";
import CreatePostPage1 from "../pages/Postpage2/CreatePostPage1";
import EditPostPage1 from "../pages/Postpage2/EditPostPage1";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css' ;
import {Notifications} from "@mantine/notifications";

const AppRoutes = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts" style={{ marginLeft: "1rem" }}>
        Posts
      </Link>
    </nav>
  <Notifications />
    <div className="container">
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage1 />} />
        <Route path="/posts/:id" element={<PostDetail1 />} />
        <Route path="/posts/create" element={<CreatePostPage1 />} />
        <Route path="/posts/:id/edit" element={<EditPostPage1 />} />
      </Routes>
    </div>
    
  </MantineProvider>
);

export default AppRoutes;

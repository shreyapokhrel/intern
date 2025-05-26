import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const createPost = async ({ title, body }) => {
    const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    });
    if (!res.ok) throw new Error('Failed to create post');
    const newPost = await res.json();
    setPosts((prev) => [...prev, newPost]);
  };

  const updatePost = async (id, { title, body }) => {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    });
    if (!res.ok) throw new Error('Failed to update post');
    const updated = await res.json();
    setPosts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  };

  return (
    <PostContext.Provider value={{ posts, createPost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};

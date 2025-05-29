import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const newPost = {
      id: Date.now(),
      ...post,
    };
    setPosts((prev) => [...prev, newPost]);
  };

  const editPost = (id, updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, editPost }}>
      {children}
    </PostContext.Provider>
  );
};

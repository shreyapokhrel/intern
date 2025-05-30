import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { API_ROUTES } from "../../../react/src/constants/ApiRoutes";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstRender, setFirstRender] = useState(false);
  const editPost = (id, updatedData) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, ...updatedData } : post
      )
    );
    setPost((prevPost) =>
      prevPost?.id === id ? { ...prevPost, ...updatedData } : prevPost
    );
  };

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_ROUTES.POSTS);
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message || "Could not load posts.");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPost = useCallback(async (postId) => {
    setLoading(true);
    setError("");
    setPost(null);
    try {
      const response = await fetch(API_ROUTES.POST(postId));
      if (!response.ok) throw new Error("Failed to fetch post");
      const data = await response.json();
      setPost(data);
      setTitle(data.title);
      setBody(data.body);
    } catch (err) {
      setError(err.message || "Could not load post.");
    } finally {
      setLoading(false);
    }
  }, []);

  const createPost = useCallback(async ({ title, body }) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_ROUTES.POSTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });
      if (!response.ok) throw new Error("Failed to create post");
      const newPost = await response.json();
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      return newPost;
    } catch (err) {
      setError(err.message || "Could not create post.");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePost = useCallback(async ({ id, title, body }) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_ROUTES.POST(id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });
      if (!response.ok) throw new Error("Failed to update post");
      const updatedPost = await response.json();
      setPost(updatedPost);
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === updatedPost.id ? updatedPost : p))
      );
      return updatedPost;
    } catch (err) {
      setError(err.message || "Could not update post.");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const resetPosts = () => {
    setPosts([]);
    setLoading(false);
    setError("");
  };

  const resetPost = () => {
    setPost(null);
    setTitle("");
    setBody("");
    setLoading(false);
    setError("");
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        post,
        title,
        body,
        loading,
        error,
        firstRender,
        editPost,
        deletePost,
        setFirstRender,
        setTitle,
        setBody,
        fetchPosts,
        fetchPost,
        createPost,
        updatePost,
        resetPosts,
        resetPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);

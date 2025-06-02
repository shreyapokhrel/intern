import { API_ROUTES } from "../constants/ApiRoutes";
const getPostUrl = (id) => `${API_ROUTES.POSTS_API}/${id}`;

export const getPosts = async () => {
  const response = await fetch(API_ROUTES.POSTS_API);
  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
};

export const getPost = async (postId) => {
  const response = await fetch(getPostUrl(postId));  
  if (!response.ok) throw new Error("Failed to fetch post");
  return await response.json();
};

export const createPost = async ({ title, body }) => {
  const response = await fetch(API_ROUTES.POSTS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });
  if (!response.ok) throw new Error("Failed to create post");
  return await response.json();
};

export const updatePost = async ({ id, title, body }) => {
  const response = await fetch(getPostUrl(id), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });
  if (!response.ok) throw new Error("Failed to update post");
  return await response.json();
};

export const deletePost = async (id) => {
  const response = await fetch(getPostUrl(id), {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete post");
  return true;
};

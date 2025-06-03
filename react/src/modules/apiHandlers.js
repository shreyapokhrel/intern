import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES } from '../constants/ApiRoutes';


const getRequest = async (url, errorMsg = 'GET failed') => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(errorMsg);
  return await res.json();
};

const postRequest = async (url, data, errorMsg = 'POST failed') => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(errorMsg);
  return await res.json();
};

const putRequest = async (url, data, errorMsg = 'PUT failed') => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(errorMsg);
  return await res.json();
};

const deleteRequest = async (url, errorMsg = 'DELETE failed') => {
  const res = await fetch(url, { method: 'DELETE' });
  if (!res.ok) throw new Error(errorMsg);
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', () =>
  getRequest(API_ROUTES.POSTS, 'Failed to fetch posts')
);

export const fetchPost = createAsyncThunk('post/fetchPost', (postId) =>
  getRequest(API_ROUTES.POST(postId), 'Failed to fetch post')
);

export const createPost = createAsyncThunk('post/createPost', ({ title, body }) =>
  postRequest(API_ROUTES.POSTS, { title, body }, 'Failed to create post')
);

export const updatePost = createAsyncThunk('post/updatePost', ({ id, title, body }) =>
  putRequest(API_ROUTES.POST(id), { title, body }, 'Failed to update post')
);

export const deletePost = createAsyncThunk('post/deletePost', async (postId) => {
  await deleteRequest(API_ROUTES.POST(postId), 'Failed to delete post');
  return postId; 
});

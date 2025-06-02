import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES } from '../constants/ApiRoutes';

const fetchApi = async (url, options, errorMsg) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(errorMsg || 'API request failed');
  if (response.status !== 204) {
    return await response.json();
  }
  return null; 
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  return await fetchApi(API_ROUTES.POSTS, null, 'Failed to fetch posts');
});

export const fetchPost = createAsyncThunk('post/fetchPost', async (postId) => {
  return await fetchApi(API_ROUTES.POST(postId), null, 'Failed to fetch post');
});

export const createPost = createAsyncThunk('post/createPost', async ({ title, body }) => {
  return await fetchApi(
    API_ROUTES.POSTS,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    },
    'Failed to create post'
  );
});

export const updatePost = createAsyncThunk('post/updatePost', async ({ id, title, body }) => {
  return await fetchApi(
    API_ROUTES.POST(id),
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    },
    'Failed to update post'
  );
});

export const deletePost = createAsyncThunk('post/deletePost', async (postId) => {
  await fetchApi(API_ROUTES.POST(postId), { method: 'DELETE' }, 'Failed to delete post');
  return postId;
});

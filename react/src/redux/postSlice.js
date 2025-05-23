import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES } from '../constants/apiRoutes';


export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await fetch(API_ROUTES.POSTS);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return await response.json();
});

export const fetchPost = createAsyncThunk('post/fetchPost', async (postId) => {
  const response = await fetch(API_ROUTES.POST(postId));
  if (!response.ok) throw new Error('Failed to fetch post');
  return await response.json();
});

export const createPost = createAsyncThunk('post/createPost', async ({ title, body }) => {
  const response = await fetch(API_ROUTES.POSTS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body }),
  });
  if (!response.ok) throw new Error('Failed to create post');
  return await response.json();
  return post;
});

export const updatePost = createAsyncThunk('post/updatePost', async ({ id, title, body }) => {
  const response = await fetch(API_ROUTES.POST(id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body }),
  });
  if (!response.ok) throw new Error('Failed to update post');
  return await response.json();
});
export const deletePost = createAsyncThunk('post/deletePost', async (id) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete post');
  return id; 
});


const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    post: null,
    loading: false,
    error: '',
    title: '',
    body: '',
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setBody(state, action) {
      state.body = action.payload;
    },
    setPost(state, action) {
      state.post = action.payload;
      state.title = action.payload?.title || '';
      state.body = action.payload?.body || '';
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    resetPosts(state) {
      state.posts = [];
      state.loading = false;
      state.error = '';
    },
    resetPost(state) {
      state.post = null;
      state.loading = false;
      state.error = '';
      state.title = '';
      state.body = '';
    },
  },
  extraReducers: (builder) => {
    builder

      
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = 'Could not load posts.';
      })

      
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.post = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.title = action.payload.title;
        state.body = action.payload.body;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.loading = false;
        state.error = 'Could not load post.';
      })

      
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state) => {
        state.loading = false;
        state.error = 'Could not create post.';
      })

      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        const index = state.posts.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state) => {
        state.loading = false;
        state.error = 'Could not update post.';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
  state.posts = state.posts.filter(post => post.id !== action.payload);
}) },
});
export const {
  setTitle,
  setBody,
  setPost,
  addPost,
  resetPosts,
  resetPost,
} = postSlice.actions;

export default postSlice.reducer;

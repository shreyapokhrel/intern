import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPost, createPost, updatePost } from '../modules/apiHandlers';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    post: null,
    loading: false,
    error: '',
    title: '',
    body: '',
    firstRender: false,
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
      state.posts = [action.payload, ...state.posts];
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
    deletePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setFirstRender(state, action) {
      state.firstRender = action.payload;
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
  },
});

export const {
  deletePost,
  setTitle,
  setBody,
  setPost,
  addPost,
  resetPosts,
  resetPost,
  setFirstRender,
} = postSlice.actions;

export default postSlice.reducer;

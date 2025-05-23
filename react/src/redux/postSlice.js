import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  return data;
});
export const fetchPost = createAsyncThunk('post/fetchPost', async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) throw new Error('Failed to fetch post');
  const data = await response.json();
  return data;
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
      });
  },
});

export const { setTitle, setBody, setPost, resetPosts, resetPost } = postSlice.actions;
export default postSlice.reducer;

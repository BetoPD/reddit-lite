import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostComments, getSubredditsPosts } from '../api/reddit';

export const getPosts = createAsyncThunk(
  'reddit/setPosts',
  async (subreddit) => {
    const posts = await getSubredditsPosts(subreddit);
    return posts;
  }
);

export const getComments = createAsyncThunk(
  'reddit/setComments',
  async ({ permalink, id }) => {
    const comments = await getPostComments(permalink);
    return {
      id,
      comments,
    };
  }
);

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    subreddit: '/r/Home/',
    posts: [],
    isLoadingSubreddits: false,
    hasErrorSubreddits: false,
    isLoadingComments: false,
    hasErrorComments: false,
  },
  reducers: {
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    },
  },
  extraReducers: {
    [getPosts.rejected]: (state, action) => {
      state.isLoadingSubreddits = false;
      state.hasErrorSubreddits = true;
    },
    [getPosts.pending]: (state, action) => {
      state.isLoadingSubreddits = true;
      state.hasErrorSubreddits = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoadingSubreddits = false;
      state.hasErrorSubreddits = false;
      state.posts = action.payload;
    },
    [getComments.rejected]: (state, action) => {
      state.isLoadingComments = false;
      state.hasErrorComments = true;
    },
    [getComments.pending]: (state, action) => {
      state.isLoadingComments = true;
      state.hasErrorComments = false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoadingComments = false;
      state.hasErrorComments = false;
      const { id, comments } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      state.posts[index].comments = comments;
    },
  },
});

export default redditSlice.reducer;

export const { setSubreddit } = redditSlice.actions;

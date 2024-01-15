import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

export const setSubreddits = createAsyncThunk(
  'subReddit/setSubreddits',
  async () => {
    const subReddits = await getSubreddits();
    return subReddits;
  }
);

const subRedditSlice = createSlice({
  name: 'subReddit',
  initialState: {
    subReddits: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [setSubreddits.pending]: (state, action) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [setSubreddits.rejected]: (state, action) => {
      state.hasError = true;
      state.isLoading = false;
    },
    [setSubreddits.fulfilled]: (state, action) => {
      state.hasError = false;
      state.isLoading = false;
      state.subReddits = action.payload;
    },
  },
});

export default subRedditSlice.reducer;

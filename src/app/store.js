import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/redditSlice';
import subRedditReducer from '../features/subRedditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subReddit: subRedditReducer,
  },
});

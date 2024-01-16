import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/redditSlice';

export default function Home() {
  const dispatch = useDispatch();
  const subreddit = useSelector((state) => state.reddit.subreddit);
  const posts = useSelector((state) => state.reddit.posts);
  useEffect(() => {
    dispatch(getPosts(subreddit));
  }, [subreddit, dispatch]);
  return <h1>Im the home</h1>;
}

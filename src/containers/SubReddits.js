import { useDispatch, useSelector } from 'react-redux';
import { setSubreddits } from '../features/subRedditSlice';
import { useEffect } from 'react';
import { setSubreddit } from '../features/redditSlice';
import SubReddit from '../components/SubReddit';
import '../styles/SubReddit.css';

export default function SubReddits() {
  const dispatch = useDispatch();
  const subReddits = useSelector((state) => state.subReddit.subReddits);
  const isLoading = useSelector((state) => state.subReddit.isLoading);
  const currentSubReddit = useSelector((state) => state.reddit.subreddit);

  useEffect(() => {
    dispatch(setSubreddits());
  }, [dispatch]);

  const handleSubredditClick = (subReddit) => {
    dispatch(setSubreddit(subReddit));
  };

  return (
    <div className="subreddit-container">
      <h1>Subreddits</h1>
      {!isLoading &&
        subReddits.map((subReddit) => {
          const { icon_img, display_name, url, id, primary_color } = subReddit;
          return (
            <SubReddit
              icon={icon_img}
              name={display_name}
              subReddit={url}
              handleClick={handleSubredditClick}
              active={currentSubReddit === url}
              color={primary_color}
              key={id}
            />
          );
        })}
    </div>
  );
}

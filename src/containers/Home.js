import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/redditSlice';
import { useSearchParams } from 'react-router-dom';
import Post from '../components/Post';
import moment from 'moment';

export default function Home() {
  const dispatch = useDispatch();
  const subreddit = useSelector((state) => state.reddit.subreddit);
  const posts = useSelector((state) => state.reddit.posts);
  const isLoading = useSelector((state) => state.reddit.isLoadingSubreddits);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('searching');

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(getPosts(subreddit));
  }, [subreddit, dispatch]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredPosts(posts.filter((post) => post.title.includes(searchTerm)));
    } else {
      setFilteredPosts(posts);
    }
  });

  if (isLoading) {
    return (
      <div>
        <h1>Is loading</h1>
      </div>
    );
  }

  return filteredPosts.map((post) => {
    const { title, url, subreddit_id, author, num_comments, created_utc } =
      post;

    return (
      <article>
        <Post
          title={title}
          image={url}
          key={subreddit_id}
          author={author}
          commentNum={num_comments}
          dateCreated={moment.unix(created_utc).fromNow()}
        />
      </article>
    );
  });
}

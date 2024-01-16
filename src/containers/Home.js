import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getPosts } from '../features/redditSlice';
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
  }, [posts, searchTerm]);

  const showComments = (permalink, id) => {
    dispatch(
      getComments({
        permalink: permalink,
        id: id,
      })
    );
  };

  if (isLoading) {
    return (
      <div>
        <h1>Is loading</h1>
      </div>
    );
  }

  return filteredPosts.map((post) => {
    const {
      title,
      url,
      id,
      author,
      num_comments,
      created_utc,
      permalink,
      comments,
    } = post;

    return (
      <article key={id}>
        <Post
          title={title}
          image={url}
          author={author}
          commentNum={num_comments}
          dateCreated={moment.unix(created_utc).fromNow()}
          permalink={permalink}
          comments={comments}
          id={id}
          getComments={showComments}
        />
      </article>
    );
  });
}

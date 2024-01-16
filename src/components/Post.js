import { FaComment } from 'react-icons/fa';
import '../styles/Post.css';
import Comment from './Comment';
import moment from 'moment';
import { useState } from 'react';

export default function Post({
  title,
  image,
  author,
  commentNum,
  dateCreated,
  permalink,
  id,
  getComments,
  comments,
}) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (!comments) {
      getComments(permalink, id);
      setShow(true);
    } else if (comments && !show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="post-container">
      <div className="post-main">
        <h1>{title}</h1>
        <img src={image} alt={title} className="post-image" />
      </div>
      <div className="post-footer">
        <p>{author}</p>
        <p>{dateCreated}</p>
        <div className="post-footer-comment">
          <button className="post-footer-comment-button" onClick={handleClick}>
            <FaComment />
          </button>
          <span>{commentNum}</span>
        </div>
      </div>
      {comments &&
        show &&
        comments.map((comment) => {
          const { author, body, created_utc, id } = comment;
          return (
            <Comment
              key={id}
              author={author}
              text={body}
              publishedTime={moment.unix(created_utc).fromNow()}
            />
          );
        })}
    </div>
  );
}

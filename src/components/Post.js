import { FaComment } from 'react-icons/fa';
import '../styles/Post.css';

export default function Post({
  title,
  image,
  author,
  commentNum,
  dateCreated,
}) {
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
          <button className="post-footer-comment-button">
            <FaComment />
          </button>
          <span>{commentNum}</span>
        </div>
      </div>
    </div>
  );
}

import '../styles/Comment.css';

export default function Comment({ author, text, publishedTime }) {
  return (
    <div className="comment-container">
      <h3>{author}</h3>
      <div className="comment-main">
        <p>{text}</p>
        <p className="comment-main-date">{publishedTime}</p>
      </div>
    </div>
  );
}

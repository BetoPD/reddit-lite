import '../styles/SubReddit.css';

export default function SubReddit({
  icon,
  name,
  subReddit,
  handleClick,
  color,
}) {
  return (
    <button onClick={() => handleClick(subReddit)} className="subreddit-button">
      <img
        src={icon}
        alt={subReddit}
        className="subreddit-icon"
        style={{ border: `3px solid ${color}` }}
      />
      <p>{name}</p>
    </button>
  );
}

import '../styles/SubReddit.css';

export default function SubReddit({
  icon,
  name,
  subReddit,
  handleClick,
  color,
  active,
}) {
  return (
    <button
      onClick={() => handleClick(subReddit)}
      className={
        active ? 'subreddit-button subreddit-button-active' : 'subreddit-button'
      }
    >
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

function StreakBadge({ streak }) {
    return (
      <div className="streak-badge">
        <div
          className="streak-badge__dot"
          style={{ background: streak.color }}
        />
        <span className="streak-badge__name">{streak.name}</span>
        <span className="streak-badge__days">{streak.days} дн.</span>
      </div>
    )
  };
  
  export default StreakBadge;
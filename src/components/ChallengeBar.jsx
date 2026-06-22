function ChallengeBar({ challenge }) {
    return (
      <div className="challenge-bar">
        <div className="challenge-bar__header">
          <span className="challenge-bar__name">{challenge.name}</span>
          <span className="challenge-bar__progress">
            день {challenge.current} из {challenge.total}
          </span>
        </div>
        <div className="challenge-bar__dots">
          {challenge.days.map((status, i) => (
            <div
              key={i}
              className={`challenge-bar__dot challenge-bar__dot--${status}`}
            />
          ))}
        </div>
      </div>
    )
  };
  
  export default ChallengeBar;
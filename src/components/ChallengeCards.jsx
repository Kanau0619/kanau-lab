export default function ChallengeCards({ challenges }) {
  return (
    <div className="challenge-grid">
      {challenges.map((challenge, index) => (
        <article className="challenge-card" key={challenge.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{challenge.title}</h3>
          <p>{challenge.text}</p>
        </article>
      ))}
    </div>
  );
}

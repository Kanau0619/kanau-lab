export default function RelationshipTimeline({ stages }) {
  if (!stages.length) {
    return null;
  }

  return (
    <ol className="relationship-timeline">
      {stages.map((stage, index) => (
        <li key={`${stage.name}-${index}`}>
          <span className="relationship-timeline__marker">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{stage.name}</h3>
          <p>{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}

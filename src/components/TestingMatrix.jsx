export default function TestingMatrix({ items }) {
  return (
    <div className="testing-matrix">
      <div className="testing-matrix__header" aria-hidden="true">
        <span>Test Dimension</span>
        <span>What I Observe</span>
        <span>Evidence / Criteria</span>
      </div>
      {items.map((item) => (
        <article className="testing-matrix__row" key={item.dimension}>
          <h3>{item.dimension}</h3>
          <p>{item.focus}</p>
          <p>{item.evidence}</p>
        </article>
      ))}
    </div>
  );
}

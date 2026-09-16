export default function BeforeAfter({ item }) {
  return (
    <article className="comparison">
      <h3>{item.title}</h3>
      <div className="comparison__grid">
        <section className="comparison__panel comparison__panel--before">
          <span className="comparison__label">Before / Bad Case</span>
          <blockquote>{item.before}</blockquote>
          <div className="comparison__analysis">
            <strong>Problem Analysis</strong>
            <p>{item.issue}</p>
          </div>
        </section>
        <section className="comparison__panel comparison__panel--after">
          <span className="comparison__label">After / Revised</span>
          <blockquote>{item.after}</blockquote>
          <div className="comparison__analysis">
            <strong>What Changed</strong>
            <p>{item.revision}</p>
          </div>
        </section>
      </div>
      <div className="comparison__result">
        <strong>Result</strong>
        <p>{item.result}</p>
      </div>
    </article>
  );
}

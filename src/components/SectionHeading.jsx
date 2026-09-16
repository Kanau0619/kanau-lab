export default function SectionHeading({ title, english, description, id }) {
  return (
    <header className="section-heading" id={id}>
      <div>
        <h2>{title}</h2>
        <span>{english}</span>
      </div>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

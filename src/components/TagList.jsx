export default function TagList({ tags, limit }) {
  const visibleTags = typeof limit === "number" ? tags.slice(0, limit) : tags;

  return (
    <ul className="tag-list" aria-label="Skills">
      {visibleTags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

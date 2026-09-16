export default function ProjectVisual({ project, className = "", eager = false }) {
  if (project.heroImage) {
    return (
      <figure className={`media-frame project-visual ${className}`.trim()}>
        <img
          src={project.heroImage}
          alt={`${project.name}角色主视觉`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          style={
            project.heroPosition
              ? { objectPosition: project.heroPosition }
              : undefined
          }
        />
      </figure>
    );
  }

  return (
    <figure
      className={`media-frame project-visual project-visual--type ${className}`.trim()}
      aria-label={`${project.name}项目视觉封面`}
    >
      <div className="project-visual__mark">{project.name.slice(0, 1)}</div>
      <figcaption>
        <span className="project-visual__name">{project.name}</span>
        <span className="project-visual__subtitle">{project.subtitle}</span>
        <span className="project-visual__note">Character Study · Kanau Lab</span>
      </figcaption>
    </figure>
  );
}

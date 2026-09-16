import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import ProjectVisual from "./ProjectVisual";
import TagList from "./TagList";

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <span className="project-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <div className="project-card__title-row">
            <h2>{project.name}</h2>
            {project.status ? (
              <span className="status-label">{project.status}</span>
            ) : null}
          </div>
          <p className="project-card__subtitle">{project.subtitle}</p>
          <p className="project-card__summary">{project.summary}</p>
          <TagList tags={project.tags} limit={5} />
          <Link className="button button--secondary" to={`/character/${project.slug}`}>
            查看 Case Study
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

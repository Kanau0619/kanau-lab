const labels = {
  projectType: "Project Type",
  platform: "Platform",
  role: "My Role",
  tools: "Tools",
};

export default function ProjectInfoCard({ info }) {
  return (
    <aside className="project-info" aria-label="Project information">
      {Object.entries(labels).map(([key, label]) => (
        <div className="project-info__item" key={key}>
          <dt>{label}</dt>
          <dd>{info[key]}</dd>
        </div>
      ))}
    </aside>
  );
}

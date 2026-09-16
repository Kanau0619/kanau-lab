import { ArrowRightIcon } from "./Icons";

export default function SystemDiagram({ nodes, description }) {
  return (
    <figure className="system-diagram">
      <div className="system-diagram__flow">
        {nodes.map((node, index) => (
          <div className="system-diagram__step" key={node}>
            <span>{node}</span>
            {index < nodes.length - 1 ? (
              <span className="system-diagram__arrow">
                <ArrowRightIcon />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {description ? <figcaption>{description}</figcaption> : null}
    </figure>
  );
}

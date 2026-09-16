import { ArrowRightIcon } from "./Icons";

export default function IterationFlow({ steps }) {
  return (
    <ol className="iteration-flow">
      {steps.map((step, index) => (
        <li key={step.label}>
          <article>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.label}</h3>
            <p>{step.text}</p>
          </article>
          {index < steps.length - 1 ? (
            <span className="iteration-flow__arrow">
              <ArrowRightIcon />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

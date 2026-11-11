import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  status: string;
  stack: string[];
  demoLink?: string;
  index: number;
};

const ProjectCards: React.FC<ProjectCardProps> = ({ title, description, category, status, stack, demoLink, index }) => {
  const shipped = status.toLowerCase() === "shipped";

  return (
    <article className="card-surface group flex h-full flex-col p-6 text-left">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-muted">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> / {category}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{title}</h3>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
            shipped ? "border-accent/40 bg-accent/10 text-accent" : "border-line bg-elevated text-muted"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${shipped ? "bg-accent" : "bg-amber-400"}`} aria-hidden="true" />
          {status}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
        {stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noreferrer" className="link-arrow mt-5 self-start">
          View product <CgArrowTopRight className="text-base" />
        </a>
      )}
    </article>
  );
};

export default ProjectCards;

import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

type ProjectCardProps = {
  title: string;
  description: string;
  imgPath: string;
  demoLink?: string;
  ghLink?: string;
  isBlog?: boolean;
  category?: string;
  status?: string;
  stack?: string[];
};

const ProjectCards: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgPath,
  demoLink,
  ghLink,
  isBlog,
  category,
  status,
  stack,
}) => {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img src={imgPath} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {category && (
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-100">
              {category}
            </span>
          )}
          {status && (
            <span className="rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-100">
              {status}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 text-left">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-300">{description}</p>
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-2">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:bg-white/10"
            >
              <BsGithub /> {isBlog ? "Blog" : "Code"}
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 via-orange-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCards;

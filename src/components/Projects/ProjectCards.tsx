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
};

const ProjectCards: React.FC<ProjectCardProps> = ({ title, description, imgPath, demoLink, ghLink, isBlog }) => {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img src={imgPath} alt={title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 text-left">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-300">{description}</p>
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
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
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

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
  return (
    <article className="group flex h-full flex-col border-t border-slate-300 pt-5 text-left">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#37627e]">{String(index + 1).padStart(2, "0")} / {category}</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#112b42]">{title}</h3>
        </div>
        <span className="shrink-0 rounded-full border border-slate-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">{status}</span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-slate-200 pt-4">
        {stack.map((item) => <span key={item} className="text-xs font-semibold text-slate-500">{item}</span>)}
      </div>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#14324b] hover:text-[#37627e]">
          View product <CgArrowTopRight className="text-lg" />
        </a>
      )}
    </article>
  );
};

export default ProjectCards;

import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact } from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPytorch } from "react-icons/si";

const stackIcons = [
  { label: "C++", icon: <CgCPlusPlus /> },
  { label: "JavaScript", icon: <DiJavascript1 /> },
  { label: "Node.js", icon: <DiNodejs /> },
  { label: "React", icon: <DiReact /> },
  { label: "MongoDB", icon: <DiMongodb /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "Git", icon: <DiGit /> },
  { label: "Firebase", icon: <SiFirebase /> },
  { label: "Python", icon: <DiPython /> },
  { label: "PyTorch", icon: <SiPytorch /> },
];

const Techstack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {stackIcons.map((item) => (
        <div key={item.label} className="card-surface flex flex-col items-center gap-2 p-4 text-4xl text-brand-200">
          {item.icon}
          <span className="text-xs font-medium uppercase tracking-wide text-slate-300">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Techstack;

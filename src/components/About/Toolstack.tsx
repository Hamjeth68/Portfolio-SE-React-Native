import React from "react";
import { SiHeroku, SiLinux, SiPostman, SiVercel, SiVisualstudiocode } from "react-icons/si";

const tools = [
  { label: "Linux", icon: <SiLinux /> },
  { label: "VS Code", icon: <SiVisualstudiocode /> },
  { label: "Postman", icon: <SiPostman /> },
  { label: "Vercel", icon: <SiVercel /> },
  { label: "Heroku", icon: <SiHeroku /> },
];

const Toolstack: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {tools.map((tool) => (
        <div key={tool.label} className="card-surface flex flex-col items-center gap-2 p-4 text-3xl text-brand-200">
          {tool.icon}
          <span className="text-xs font-medium uppercase tracking-wide text-slate-300">{tool.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;

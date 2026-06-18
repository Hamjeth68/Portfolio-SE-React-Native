import React from "react";
import { DiGit, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact } from "react-icons/di";
import {
  SiAmazonaws,
  SiAngular,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiKubernetes,
  SiMicrosoftazure,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbDeviceMobile } from "react-icons/tb";

const stackIcons = [
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "JavaScript", icon: <DiJavascript1 /> },
  { label: "React", icon: <DiReact /> },
  { label: "React Native", icon: <TbDeviceMobile /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "Angular", icon: <SiAngular /> },
  { label: "Redux", icon: <SiRedux /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
  { label: "Node.js", icon: <DiNodejs /> },
  { label: "NestJS", icon: <SiNestjs /> },
  { label: "FastAPI", icon: <SiFastapi /> },
  { label: "GraphQL", icon: <SiGraphql /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "MongoDB", icon: <DiMongodb /> },
  { label: "Firebase", icon: <SiFirebase /> },
  { label: "Redis", icon: <SiRedis /> },
  { label: "AWS", icon: <SiAmazonaws /> },
  { label: "GCP", icon: <SiGooglecloud /> },
  { label: "Azure", icon: <SiMicrosoftazure /> },
  { label: "Docker", icon: <SiDocker /> },
  { label: "Kubernetes", icon: <SiKubernetes /> },
  { label: "NGINX", icon: <SiNginx /> },
  { label: "Git", icon: <DiGit /> },
  { label: "GitHub Actions", icon: <SiGithubactions /> },
  { label: "C++", icon: <SiCplusplus /> },
  { label: "Python", icon: <DiPython /> },
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

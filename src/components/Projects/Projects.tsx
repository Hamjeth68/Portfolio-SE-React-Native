import React from "react";
import Reveal from "../Reveal";
import ProjectCard from "./ProjectCards";

const currentWork = [
  {
    title: "Healthelic",
    description: "A clinical AI platform that helps physicians structure patient history, synthesize evidence, and build treatment plans within supervised, accountable workflows.",
    category: "Clinical AI",
    status: "In development",
    stack: ["Next.js", "NestJS", "Clinical governance"],
  },
  {
    title: "Skolee",
    description: "A school operations product focused on bringing communication, learning workflows, and day-to-day administration into one clearer system.",
    category: "Education",
    status: "In development",
    stack: ["React Native", "Product systems", "Operations UX"],
  },
  {
    title: "Tuition Notes",
    description: "A learning workspace for organizing, delivering, and reusing tuition content and classroom resources for students and teachers.",
    category: "Education",
    status: "In development",
    stack: ["Content workflows", "Student UX", "Mobile-first"],
  },
  {
    title: "Staymesh",
    description: "A hospitality product exploring better coordination across property operations, guest journeys, and the full accommodation experience.",
    category: "Hospitality",
    status: "In development",
    stack: ["Platform thinking", "Operations", "Experience design"],
  },
];

const shippedWork = [
  {
    title: "ClassVeew",
    description: "A school management platform for preschools and kindergartens, supporting enrollment, documents, admin operations, and scorecards.",
    category: "School SaaS",
    status: "Shipped",
    stack: ["Admin panel", "Enrollment", "Scoring"],
    demoLink: "https://apps.apple.com/lk/app/classveew/id6747874553",
  },
  {
    title: "Ferry-Pay",
    description: "A mobile banking companion for managing payroll cards, spending, rewards, and card controls.",
    category: "Fintech",
    status: "Shipped",
    stack: ["Mobile banking", "Card controls", "Rewards UX"],
    demoLink: "https://play.google.com/store/apps/details?id=com.ferrywalletnative&pcampaignid=web_share",
  },
  {
    title: "Apollo Art",
    description: "A gallery-in-your-pocket experience that curates digital-art playlists, syncs to smart TVs, and connects collectors with marketplaces.",
    category: "Art-tech",
    status: "Shipped",
    stack: ["Curation", "Smart TV", "Marketplace"],
    demoLink: "https://apps.apple.com/lk/app/apollo-art/id1486426294",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-3xl text-left">
          <p className="section-kicker">Selected work</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] text-[#112b42] md:text-6xl">A focused selection of products in progress and products already in the world.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">This page is intentionally curated. Each entry represents product work where the interface, operational workflow, and technical foundation need to hold together.</p>
        </Reveal>

        <Reveal className="mt-16 border-b border-slate-300 pb-4">
          <h2 className="text-xl font-bold text-[#14324b]">In progress</h2>
        </Reveal>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {currentWork.map((project, index) => <Reveal key={project.title} delayMs={index * 60}><ProjectCard {...project} index={index} /></Reveal>)}
        </div>

        <Reveal className="mt-16 border-b border-slate-300 pb-4">
          <h2 className="text-xl font-bold text-[#14324b]">Previously shipped</h2>
        </Reveal>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
          {shippedWork.map((project, index) => <Reveal key={project.title} delayMs={index * 60}><ProjectCard {...project} index={index} /></Reveal>)}
        </div>
      </div>
    </section>
  );
};

export default Projects;

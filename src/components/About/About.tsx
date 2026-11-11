import React from "react";
import Reveal from "../Reveal";
import Aboutcard from "./AboutCard";
import AISkills from "./AISkills";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const principles = [
  ["Start with the real workflow", "The best interface follows the work people are trying to get done."],
  ["Make the system understandable", "Architecture, copy, and interaction should help teams make better decisions."],
  ["Use AI responsibly", "Automation belongs where it has a clear user benefit, strong context, and appropriate oversight."],
];

const About: React.FC = () => {
  return (
    <section className="relative py-14 md:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl space-y-16 px-4">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-4 text-left">
            <p className="section-kicker">About</p>
            <h2 id="about-heading" className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              Engineering with a product point of view.
            </h2>
            <Aboutcard />
          </Reveal>
          <div className="card-surface p-6 text-left md:mt-20">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Working principles</p>
            <ol className="mt-5 space-y-5">
              {principles.map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Reveal>
          <AISkills />
        </Reveal>

        <Reveal className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">Core engineering skills</h3>
          <Techstack />
        </Reveal>

        <Reveal className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">Tools I use</h3>
          <Toolstack />
        </Reveal>

        <Reveal>
          <Github />
        </Reveal>
      </div>
    </section>
  );
};

export default About;

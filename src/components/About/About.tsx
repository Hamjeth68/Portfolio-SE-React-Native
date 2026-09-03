import React from "react";
import Reveal from "../Reveal";
import Aboutcard from "./AboutCard";
import AISkills from "./AISkills";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
  return (
    <section className="relative py-14 md:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <div className="grid items-start gap-10 border-b border-slate-200 pb-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-4 text-left">
            <p className="section-kicker">About</p>
            <h2 id="about-heading" className="font-display text-5xl leading-tight text-[#112b42] md:text-6xl">
              Engineering with a product point of view.
            </h2>
            <Aboutcard />
          </Reveal>
          <div className="border-l-2 border-[#37627e] pl-6 text-left md:mt-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Working principles</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="font-bold text-[#14324b]">Start with the real workflow</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">The best interface follows the work people are trying to get done.</p>
              </div>
              <div>
                <p className="font-bold text-[#14324b]">Make the system understandable</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Architecture, copy, and interaction should help teams make better decisions.</p>
              </div>
              <div>
                <p className="font-bold text-[#14324b]">Use AI responsibly</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Automation belongs where it has a clear user benefit, strong context, and appropriate oversight.</p>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <AISkills />
        </Reveal>

        <Reveal className="space-y-6">
          <h3 className="text-2xl font-bold text-[#14324b]">Core engineering skills</h3>
          <Techstack />
        </Reveal>

        <Reveal className="space-y-6">
          <h3 className="text-2xl font-bold text-[#14324b]">Tools I use</h3>
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

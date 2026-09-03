import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import Home2 from "./Home2";

const focusAreas = [
  ["01", "Product engineering", "Turning complex workflows into clear, dependable web and mobile products."],
  ["02", "Applied AI", "Using AI where it improves a decision, a workflow, or the quality of a user's work."],
  ["03", "Cross-platform delivery", "Building considered experiences across React, React Native, TypeScript, and backend systems."],
];

const Home: React.FC = () => {
  return (
    <section id="home" className="pb-0">
      <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-28">
        <div className="border-b border-slate-200 pb-12 md:pb-16">
          <Reveal className="grid gap-10 text-left md:grid-cols-[1.5fr_0.5fr] md:items-end">
            <div>
              <p className="section-kicker">Independent software engineer</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] text-[#112b42] md:text-7xl">
                Useful software, built with care.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                I&apos;m Hamjeth Misree, a product-focused engineer building web, mobile, and AI-enabled systems that are calm to use and solid underneath.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/project" className="rounded-lg bg-[#14324b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0c2033]">
                  View selected work
                </Link>
                <Link to="/contact" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-[#14324b] hover:text-[#14324b]">
                  Start a conversation
                </Link>
              </div>
            </div>
            <aside className="border-l-2 border-[#37627e] pl-5 md:mb-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Currently building</p>
              <p className="mt-3 text-xl font-semibold text-[#14324b]">Skolee</p>
              <p className="mt-1 text-xl font-semibold text-[#14324b]">Tuition Notes</p>
              <p className="mt-1 text-xl font-semibold text-[#14324b]">Staymesh</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-500">Plus Healthelic, a governed clinical AI platform for physician workflows.</p>
            </aside>
          </Reveal>
        </div>

        <div className="grid border-b border-slate-200 md:grid-cols-3">
          {focusAreas.map(([number, title, description]) => (
            <Reveal key={number} className="border-b border-slate-200 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <p className="text-xs font-bold tracking-[0.2em] text-[#37627e]">{number}</p>
              <h2 className="mt-4 text-xl font-bold text-[#14324b]">{title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;

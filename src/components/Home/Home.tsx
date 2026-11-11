import React from "react";
import { Link } from "react-router-dom";
import LinkedInPost from "../LinkedInPost";
import Reveal from "../Reveal";
import Home2 from "./Home2";

const focusAreas = [
  ["01", "Product engineering", "Turning complex workflows into clear, dependable web and mobile products."],
  ["02", "Applied AI", "Using AI where it improves a decision, a workflow, or the quality of a user's work."],
  ["03", "Cross-platform delivery", "Building considered experiences across React, React Native, TypeScript, and backend systems."],
];

const building = ["Skolee", "Tuition Notes", "Staymesh"];

const Home: React.FC = () => {
  return (
    <section id="home" className="pb-0">
      <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-28">
        <div className="pb-12 md:pb-16">
          <Reveal className="grid gap-10 text-left md:grid-cols-[1.45fr_0.55fr] md:items-end">
            <div>
              <p className="section-kicker">Independent software engineer</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
                Useful software,{" "}
                <br className="hidden sm:block" />
                built with <span className="text-accent">care</span>
                <span className="ml-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.06em] animate-blink bg-accent align-baseline motion-reduce:animate-none" aria-hidden="true" />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft md:text-xl">
                I&apos;m Hamjeth Misree, a product-focused engineer building web, mobile, and AI-enabled systems that are calm to use and solid underneath.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/project" className="btn-primary">
                  View selected work
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Start a conversation
                </Link>
              </div>
            </div>
            <aside className="overflow-hidden rounded-xl border border-line bg-surface/80 md:mb-1" aria-label="Currently building">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-2 font-mono text-[11px] text-muted">building.log</span>
              </div>
              <div className="space-y-2.5 p-4 font-mono text-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Currently building</p>
                {building.map((name) => (
                  <p key={name} className="flex items-center gap-2 text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {name}
                  </p>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map(([number, title, description]) => (
            <Reveal key={number} className="card-surface p-6">
              <p className="font-mono text-xs text-accent">{number}</p>
              <h2 className="mt-4 text-lg font-semibold text-ink">{title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{description}</p>
            </Reveal>
          ))}
        </div>

        <LinkedInPost />
      </div>
      <Home2 />
    </section>
  );
};

export default Home;

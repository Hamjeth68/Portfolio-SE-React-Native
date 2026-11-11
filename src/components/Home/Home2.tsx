import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

const Home2: React.FC = () => {
  return (
    <section className="border-y border-line bg-surface/60 py-14 md:py-20" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="section-kicker">A practical approach</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">Good product work is equal parts clarity and follow-through.</h2>
        </Reveal>
        <Reveal delayMs={100} className="space-y-6 text-left text-lg leading-relaxed text-soft">
          <p>I work across the product lifecycle, from shaping a messy idea and its interface to building the systems that make it reliable in production.</p>
          <p>My recent work spans education, hospitality, and fintech. The common thread is simple: make complex work easier for the people doing it.</p>
          <Link to="/about" className="link-arrow">
            More about my approach <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Home2;

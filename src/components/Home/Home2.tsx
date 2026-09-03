import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

const Home2: React.FC = () => {
  return (
    <section className="border-b border-slate-200 bg-[#ecebe6] py-14 md:py-20" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <p className="section-kicker">A practical approach</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#112b42] md:text-5xl">Good product work is equal parts clarity and follow-through.</h2>
        </Reveal>
        <Reveal delayMs={100} className="space-y-6 text-left text-lg leading-relaxed text-slate-700">
          <p>I work across the product lifecycle, from shaping a messy idea and its interface to building the systems that make it reliable in production.</p>
          <p>My recent work spans education, hospitality, fintech, and clinical AI. The common thread is simple: make complex work easier for the people doing it.</p>
          <Link to="/about" className="inline-flex border-b-2 border-[#37627e] pb-1 text-sm font-bold text-[#14324b] transition hover:border-[#14324b]">
            More about my approach
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Home2;

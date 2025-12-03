import React from "react";
import laptopImg from "../../Assets/about.png";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
  return (
    <section className="relative py-14 md:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl space-y-12 px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-left">
            <h2 id="about-heading" className="text-3xl font-semibold md:text-4xl">
              Know who <span className="text-brand-200">I am</span>
            </h2>
            <Aboutcard />
          </div>
          <div className="relative flex justify-center">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute left-10 bottom-0 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
              <img src={laptopImg} alt="Working setup" className="mx-auto h-72 w-auto" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Professional skillset</h3>
          <Techstack />
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Tools I use</h3>
          <Toolstack />
        </div>

        <Github />
      </div>
    </section>
  );
};

export default About;

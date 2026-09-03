import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="card-surface space-y-4 p-6">
      <p className="text-lg leading-relaxed text-slate-200">
        I&apos;m <span className="text-brand-200">Hamjeth Misree</span>, a Sri Lanka-raised Software Engineer who
        blends product thinking with hands-on engineering to ship polished, resilient experiences across mobile, web,
        and AI-assisted workflows.
      </p>

      <p className="text-sm leading-relaxed text-slate-300">
        Right now, a big part of my energy is going into products like <span className="text-brand-200">Skolee</span>,
        <span className="text-brand-200"> Tuition Notes</span>, and <span className="text-brand-200">Staymesh</span>:
        building software that feels current, useful, and well considered from both a user and system perspective.
      </p>

      <div className="space-y-2 text-slate-200">
        <p className="text-sm uppercase tracking-wide text-slate-400">When I’m off the clock</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3">
            <ImPointRight className="text-brand-300" />
            <span>Exploring new worlds in story-rich games</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-brand-300" />
            <span>Writing about engineering craft and product lessons</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-brand-300" />
            <span>Traveling and swapping ideas with builders</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-brand-200 text-lg font-medium">“Build things that feel clear, inevitable, and genuinely useful.”</p>
        <p className="text-sm text-slate-400">— Hamjeth Misree</p>
      </div>
    </div>
  );
};

export default AboutCard;

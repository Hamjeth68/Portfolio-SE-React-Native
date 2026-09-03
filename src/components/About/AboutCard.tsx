import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="space-y-5 pt-2">
      <p className="text-lg leading-relaxed text-slate-700">
        I&apos;m <span className="font-bold text-[#14324b]">Hamjeth Misree</span>, a Sri Lanka-raised Software Engineer who
        blends product thinking with hands-on engineering to ship polished, resilient experiences across mobile, web,
        and AI-assisted workflows.
      </p>

      <p className="text-sm leading-relaxed text-slate-600">
        Right now, a big part of my energy is going into products like <span className="font-semibold text-[#14324b]">Skolee</span>,
        <span className="font-semibold text-[#14324b]"> Tuition Notes</span>, <span className="font-semibold text-[#14324b]">Staymesh</span>, and <span className="font-semibold text-[#14324b]">Healthelic</span>:
        building software that feels current, useful, and well considered from both a user and system perspective.
      </p>

      <div className="space-y-2 border-t border-slate-200 pt-5 text-slate-700">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">When I’m off the clock</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3">
            <ImPointRight className="text-[#37627e]" />
            <span>Exploring new worlds in story-rich games</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-[#37627e]" />
            <span>Writing about engineering craft and product lessons</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-[#37627e]" />
            <span>Traveling and swapping ideas with builders</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-medium text-[#14324b]">“Build things that feel clear, inevitable, and genuinely useful.”</p>
        <p className="text-sm text-slate-500">— Hamjeth Misree</p>
      </div>
    </div>
  );
};

export default AboutCard;

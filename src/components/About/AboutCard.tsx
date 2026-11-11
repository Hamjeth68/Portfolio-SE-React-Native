import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="space-y-5 pt-2">
      <p className="text-lg leading-relaxed text-soft">
        I&apos;m <span className="font-semibold text-ink">Hamjeth Misree</span>, a Sri Lanka-raised Software Engineer who
        blends product thinking with hands-on engineering to ship polished, resilient experiences across mobile, web,
        and AI-assisted workflows.
      </p>

      <p className="text-sm leading-relaxed text-muted">
        Right now, a big part of my energy is going into products like <span className="font-semibold text-ink">Skolee</span>,
        <span className="font-semibold text-ink"> Tuition Notes</span>, and <span className="font-semibold text-ink">Staymesh</span>:
        building software that feels current, useful, and well considered from both a user and system perspective.
      </p>

      <div className="space-y-2 border-t border-line pt-5 text-soft">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">When I’m off the clock</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3">
            <ImPointRight className="text-accent" />
            <span>Exploring new worlds in story-rich games</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-accent" />
            <span>Writing about engineering craft and product lessons</span>
          </li>
          <li className="flex items-center gap-3">
            <ImPointRight className="text-accent" />
            <span>Traveling and swapping ideas with builders</span>
          </li>
        </ul>
      </div>

      <blockquote className="border-l-2 border-accent pl-4">
        <p className="text-lg font-medium text-ink">“Build things that feel clear, inevitable, and genuinely useful.”</p>
        <p className="mt-1 font-mono text-xs text-muted">— Hamjeth Misree</p>
      </blockquote>
    </div>
  );
};

export default AboutCard;

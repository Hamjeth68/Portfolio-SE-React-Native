import React from "react";
import Reveal from "./Reveal";

const POST_URN = "urn:li:ugcPost:7525908730186579968";
const EMBED_URL = `https://www.linkedin.com/embed/feed/update/${POST_URN}`;
const POST_URL = `https://www.linkedin.com/feed/update/${POST_URN}/`;

const LinkedInPost: React.FC = () => (
  <section aria-labelledby="linkedin-post-heading" className="border-b border-slate-200 py-12 text-left md:py-16">
    <Reveal className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      <div>
        <p className="section-kicker">Featured on LinkedIn</p>
        <h2 id="linkedin-post-heading" className="mt-4 font-display text-3xl leading-tight text-[#112b42] md:text-4xl">
          Which reproducibility checks actually catch a broken ML result?
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
          My ReproMut research preprint breaks small ML experiments on purpose, in known ways, then measures which common checks notice.
        </p>
        <a
          href={POST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex border-b-2 border-[#37627e] pb-1 text-sm font-bold text-[#14324b] transition hover:border-[#14324b]"
        >
          Open the post on LinkedIn
        </a>
      </div>
      <div className="w-full max-w-[504px] overflow-hidden rounded-2xl border border-slate-300 bg-white">
        <iframe
          src={EMBED_URL}
          title="Embedded LinkedIn post by Hamjeth Misree"
          width="100%"
          height="1329"
          loading="lazy"
          allowFullScreen
          className="block w-full border-0"
        />
      </div>
    </Reveal>
  </section>
);

export default LinkedInPost;

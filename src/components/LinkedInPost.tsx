import React from "react";
import Reveal from "./Reveal";

const POST_URN = "urn:li:ugcPost:7525908730186579968";
const EMBED_URL = `https://www.linkedin.com/embed/feed/update/${POST_URN}`;
const POST_URL = `https://www.linkedin.com/feed/update/${POST_URN}/`;
const ARTICLE_URL = "https://medium.com/@hamjeth-misree/your-seed-is-fixed-your-ml-result-still-changed-914954549740";

const stats = [
  ["452", "planted cases"],
  ["29%", "of faults caught by a seed check"],
  ["10/10", "hidden faults caught by re-running, in real repos"],
];

const LinkedInPost: React.FC = () => (
  <section aria-labelledby="linkedin-post-heading" className="py-14 text-left md:py-20">
    <Reveal className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
      <div>
        <p className="section-kicker">Featured research</p>
        <h2 id="linkedin-post-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Which reproducibility checks actually catch a broken ML result?
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          My ReproMut research preprint breaks small ML experiments on purpose, in known ways, then measures which common checks notice.
        </p>
        <ul className="mt-6 grid max-w-md grid-cols-3 gap-3">
          {stats.map(([value, label]) => (
            <li key={label} className="rounded-lg border border-line bg-surface/80 p-3">
              <p className="font-mono text-xl font-semibold text-accent">{value}</p>
              <p className="mt-1 text-[11px] leading-snug text-muted">{label}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Read the article on Medium
          </a>
          <a href={POST_URL} target="_blank" rel="noopener noreferrer" className="link-arrow">
            Open the post on LinkedIn
          </a>
        </div>
      </div>
      <div className="w-full max-w-[504px] overflow-hidden rounded-xl border border-line bg-white">
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

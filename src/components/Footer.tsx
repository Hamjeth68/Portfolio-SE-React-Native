import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-center text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p className="text-slate-400">Designed and developed by Hamjeth Misree</p>
        <p className="text-slate-400">© {year} HM</p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/Hamjeth68"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-brand-400 hover:bg-white/10"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/i/flow/single_sign_on"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-brand-400 hover:bg-white/10"
            aria-label="Twitter"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/hamjeth-misree-8a6a621a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:border-brand-400 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#ecebe6]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-center text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>Hamjeth Misree · software engineer and product builder</p>
        <p>© {year}</p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/Hamjeth68"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-transparent text-base text-slate-700 transition hover:border-[#14324b] hover:text-[#14324b]"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/i/flow/single_sign_on"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-transparent text-base text-slate-700 transition hover:border-[#14324b] hover:text-[#14324b]"
            aria-label="Twitter"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/hamjeth-misree-8a6a621a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-transparent text-base text-slate-700 transition hover:border-[#14324b] hover:text-[#14324b]"
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

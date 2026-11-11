import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-base text-muted transition hover:border-accent/60 hover:text-accent";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-line bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-center text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs">
          <span className="text-accent">$</span> Hamjeth Misree · software engineer and product builder
        </p>
        <p className="font-mono text-xs text-muted">© {year}</p>
        <div className="flex items-center justify-center gap-3">
          <a href="https://github.com/Hamjeth68" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/i/flow/single_sign_on" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Twitter">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.linkedin.com/in/hamjeth-misree-8a6a621a0/" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

type NavLink = {
  to: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
};

const links: NavLink[] = [
  { to: "/", label: "Home", icon: <AiOutlineHome /> },
  { to: "/about", label: "About", icon: <AiOutlineUser /> },
  { to: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
  { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
  { to: "/contact", label: "Reach Me", icon: <AiOutlineMail /> },
  { to: "https://github.com/Hamjeth68", label: "Blogs", icon: <ImBlog />, external: true },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${scrolled ? "bg-slate-900/80 backdrop-blur border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
          <span className="rounded-lg bg-white/5 px-3 py-2 text-base font-semibold uppercase text-brand-200 shadow-sm">HM.</span>
          <span className="text-sm text-slate-300 hidden sm:inline">Software Engineer</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Hamjeth68/Portfolio-SE-React-Native"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white/10 hover:text-brand-100 sm:flex"
          >
            <CgGitFork />
            <AiFillStar />
            <span className="hidden md:inline">Star on GitHub</span>
          </a>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-brand-400 hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 rounded-full bg-white transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-white transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-white transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <nav
        className={`md:border-t md:border-white/5 md:bg-transparent ${isOpen ? "max-h-96" : "max-h-0 md:max-h-none"} overflow-hidden transition-all duration-300 md:max-h-none md:overflow-visible`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4 text-sm font-medium text-slate-200 md:flex-row md:items-center md:justify-end md:gap-2 md:pb-4">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-brand-100"
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-brand-100 ${pathname === link.to ? "bg-white/5 text-brand-100" : ""}`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

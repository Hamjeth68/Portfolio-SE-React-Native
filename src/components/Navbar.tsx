import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
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
  { to: "/project", label: "Work", icon: <AiOutlineFundProjectionScreen /> },
  { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
  { to: "/contact", label: "Contact", icon: <AiOutlineMail /> },
  { to: "https://github.com/Hamjeth68", label: "GitHub", icon: <ImBlog />, external: true },
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
    <header className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-slate-200 bg-[#f7f6f2]/95 shadow-sm backdrop-blur" : "border-transparent bg-[#f7f6f2]/90"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14324b] text-xs font-bold uppercase tracking-wide text-white">HM</span>
          <span className="hidden text-sm font-medium text-slate-600 sm:inline">Hamjeth Misree</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 transition hover:border-slate-400 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-slate-900 transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-slate-900 transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-slate-900 transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <nav
        className={`${isOpen ? "max-h-96 border-t border-slate-200" : "max-h-0 md:max-h-none"} overflow-hidden transition-all duration-300 md:max-h-none md:overflow-visible`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-600 md:-mt-10 md:flex-row md:items-center md:justify-end md:gap-1 md:py-0">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-[#14324b]"
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-[#14324b] ${pathname === link.to ? "bg-[#14324b] text-white hover:bg-[#14324b] hover:text-white" : ""}`}
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

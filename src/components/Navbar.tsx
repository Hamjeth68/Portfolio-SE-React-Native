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

const linkBase =
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";

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
      className={`fixed left-0 right-0 top-0 z-40 border-b backdrop-blur transition-all duration-300 ${
        scrolled ? "border-line bg-bg/85" : "border-transparent bg-bg/60"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/50 bg-accent/10 font-mono text-xs font-semibold text-accent">
            HM
          </span>
          <span className="hidden font-mono text-sm text-muted sm:inline">
            hamjeth<span className="text-accent">.</span>misree
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a href={link.to} target="_blank" rel="noreferrer" className={`${linkBase} text-muted hover:bg-elevated hover:text-ink`}>
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    aria-current={pathname === link.to ? "page" : undefined}
                    className={`${linkBase} ${
                      pathname === link.to ? "bg-accent/10 text-accent" : "text-muted hover:bg-elevated hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink transition hover:border-accent/60 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <nav
        aria-label="Mobile"
        className={`${isOpen ? "max-h-96 border-t border-line" : "max-h-0"} overflow-hidden bg-bg/95 transition-all duration-300 md:hidden`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.to} target="_blank" rel="noreferrer" className={`${linkBase} text-muted hover:bg-elevated hover:text-ink`}>
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  aria-current={pathname === link.to ? "page" : undefined}
                  className={`${linkBase} ${
                    pathname === link.to ? "bg-accent/10 text-accent" : "text-muted hover:bg-elevated hover:text-ink"
                  }`}
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

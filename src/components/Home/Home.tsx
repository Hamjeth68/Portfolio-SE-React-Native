import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Reveal from "../Reveal";
import Home2 from "./Home2";
import Type from "./Type";

const services = [
  {
    title: "Product Design to Production",
    desc: "I turn rough concepts into production-grade apps with a clear product lens, fast iteration loops, and strong execution across frontend and backend layers.",
    tags: ["Discovery", "UX strategy", "Delivery", "Launch"],
    span: "md:col-span-2",
  },
  {
    title: "Education & Workflow Systems",
    desc: "From school operations to learning content flows, I enjoy building systems that reduce friction for admins, teachers, students, and families.",
    tags: ["EdTech", "Admin UX", "Teacher tools", "Student flows"],
  },
  {
    title: "Mobile Experiences",
    desc: "Cross-platform products with strong interaction quality, scalable architectures, and the level of polish users expect from modern apps.",
    tags: ["React Native", "iOS", "Android", "TypeScript"],
  },
  {
    title: "AI-Native Features",
    desc: "I integrate assistants, automation, and intelligent workflows where they actually improve the product rather than adding noise.",
    tags: ["LLM UX", "Agents", "Automation", "RAG"],
    span: "md:col-span-2",
  },
];

const Home: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.16),transparent_24%),radial-gradient(circle_at_85%_0%,rgba(45,212,191,0.14),transparent_28%),radial-gradient(circle_at_50%_60%,rgba(249,115,22,0.12),transparent_36%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal className="space-y-7 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Hamjeth Misree
              </div>
              <div className="pill text-xs font-semibold uppercase tracking-wide text-brand-100">
                Product engineer shaping modern apps
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                I build digital <span className="text-gradient-animate">products</span> people actually want to use
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Software Engineer focused on product quality, modern UI, and scalable delivery across mobile, web, and
                AI-assisted systems. Right now I’m building Skolee, Tuition Notes, and Staymesh while continuing to
                ship products across fintech, education, and commerce.
              </p>
            </div>
            <div className="hero-card p-6">
              <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Current focus</p>
                  <div className="mt-2 text-2xl font-semibold text-brand-100 md:text-3xl">
                    <Type />
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Skolee</p>
                  <p>Tuition Notes</p>
                  <p>Staymesh</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/project"
                className="rounded-full bg-gradient-to-r from-brand-500 via-orange-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-900/40"
              >
                Explore projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white/5"
              >
                Let&apos;s talk
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <div className="metric-card">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Now building</p>
                <p className="mt-3 text-2xl font-semibold text-white">3</p>
                <p>new product tracks</p>
              </div>
              <div className="metric-card">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Shipped domains</p>
                <p className="mt-3 text-2xl font-semibold text-white">4+</p>
                <p>education, fintech, commerce, art</p>
              </div>
              <div className="metric-card">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Primary stack</p>
                <p className="mt-3 text-2xl font-semibold text-white">RN + TS</p>
                <p>with web and AI integrations</p>
              </div>
            </div>
          </Reveal>

          <div className="relative flex justify-center">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-gradient-to-tr from-brand-500/30 via-orange-300/25 to-cyan-400/20 blur-3xl" />
            <div className="hero-card relative w-full max-w-md overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%)]" />
              <img src={homeLogo} alt="Developer avatar" className="relative mx-auto h-80 w-auto" />
              <div className="relative mt-5 grid gap-3 text-left text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Design direction</p>
                  <p className="mt-1 text-base font-medium text-white">Cleaner interface, stronger product story</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">What I care about</p>
                  <p className="mt-1 text-base font-medium text-white">Clarity, momentum, and polished UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reveal delayMs={90} className="mt-14">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <p className="section-kicker">Featured now</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Skolee</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Reworking school operations into a smoother, more usable product experience.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <p className="section-kicker">In progress</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Tuition Notes</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Helping learning content feel easier to organize, access, and reuse.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <p className="section-kicker">Exploration</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Staymesh</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Designing a better operational layer for stay and guest experiences.
              </p>
            </div>
          </div>
        </Reveal>

        <div id="services" className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="section-kicker">What I bring</p>
              <h2 className="text-3xl font-semibold">A sharper mix of engineering, product sense, and modern UI craft</h2>
            </div>
            <Link
              to="/contact"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:bg-white/5 md:inline-flex"
            >
              Start a conversation
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delayMs={index * 80} className={service.span ?? ""}>
                <div className="card-surface flex h-full flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100">Focus</span>
                  </div>
                  <p className="text-sm text-slate-300">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-brand-100">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;

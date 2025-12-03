import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";

const services = [
  {
    title: "Product Engineering",
    desc: "From brief to launch-ready builds with design systems, scalable architectures, and automated quality gates.",
    tags: ["React Native", "React", "TypeScript", "CI/CD"],
  },
  {
    title: "Mobile & Cross-Platform",
    desc: "High-performance iOS/Android apps with native integrations, analytics, and growth-ready feature flags.",
    tags: ["RN Modules", "App Store/Play", "Analytics", "A/B"],
  },
  {
    title: "Consulting & Audits",
    desc: "Architecture reviews, performance tuning, and roadmap co-planning tailored for startups shipping fast.",
    tags: ["Perf", "DX", "Roadmaps"],
  },
];

const Home: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(99,102,241,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Building for ambitious teams
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Bespoke products for web & mobile
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                I architect, design, and ship production-grade experiences—fast. Let’s move from idea to live builds
                with confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-inner shadow-black/30">
              <p className="text-sm uppercase tracking-wide text-slate-400">Focus areas</p>
              <div className="mt-2 text-2xl font-semibold text-brand-100 md:text-3xl">
                <Type />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-900/40"
              >
                Book a consultation
              </Link>
              <Link
                to="/project"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white/5"
              >
                View delivered work
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-white">20+</p>
                <p>Apps shipped</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-white">4.8★</p>
                <p>Avg store rating</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-white">8+ yrs</p>
                <p>Building products</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-500/30 via-cyan-300/25 to-slate-900 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <img src={homeLogo} alt="Developer avatar" className="mx-auto h-80 w-auto" />
              <div className="mt-4 text-center text-sm text-slate-300">
                Partner-ready for greenfield builds, rescue missions, and growth experiments.
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-wide text-slate-400">What I deliver</p>
              <h2 className="text-3xl font-semibold">Services tailored for product teams</h2>
            </div>
            <Link
              to="/contact"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:bg-white/5 md:inline-flex"
            >
              Start a project
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card-surface flex h-full flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100">Pro</span>
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
            ))}
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;

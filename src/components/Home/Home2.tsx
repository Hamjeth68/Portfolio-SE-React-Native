import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.svg";
import Reveal from "../Reveal";

const socials = [
  { href: "https://github.com/Hamjeth68", label: "GitHub", icon: <AiFillGithub /> },
  { href: "https://www.linkedin.com/in/hamjeth-misree-8a6a621a0/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: "https://www.instagram.com/jeta_x_o/", label: "Instagram", icon: <AiFillInstagram /> },
];

const Home2: React.FC = () => {
  return (
    <section className="relative bg-white/5 py-12 md:py-16" id="about">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-3">
          <Reveal className="space-y-4 text-left md:col-span-2">
            <p className="section-kicker">About me</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Building software with a stronger eye for <span className="text-gradient-animate">product quality</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-200">
              I&apos;m a product-minded engineer who cares about how software feels, not just whether it runs. My work
              lives at the intersection of <span className="text-brand-200">React Native</span>, <span className="text-brand-200">React</span>, TypeScript,
              and thoughtful interface design across Android, iOS, and web.
            </p>
            <p className="text-base text-slate-300">
              Lately I&apos;ve been refreshing my own portfolio around the kind of products I&apos;m actually building now:
              education tools like <span className="text-brand-200">Skolee</span> and <span className="text-brand-200">Tuition Notes</span>, plus
              hospitality-facing ideas like <span className="text-brand-200">Staymesh</span>. I also enjoy integrating
              <span className="text-brand-200"> AI-native workflows</span> when they meaningfully improve the experience.
            </p>
            <div className="grid gap-3 pt-2 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Mindset</p>
                <p className="mt-2 text-sm text-slate-200">Product-led engineering</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Strength</p>
                <p className="mt-2 text-sm text-slate-200">Polished cross-platform UX</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Current lens</p>
                <p className="mt-2 text-sm text-slate-200">Education and platform systems</p>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={120} className="flex justify-center">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareColor="#8b5cf6" glareBorderRadius="1rem">
              <div className="hero-card relative overflow-hidden p-4 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-cyan-400/10" />
                <img src={myImg} alt="Hamjeth Misree" className="relative mx-auto h-64 w-auto" />
              </div>
            </Tilt>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
          <h3 className="text-2xl font-semibold">Find me online</h3>
          <p className="text-slate-300">Feel free to connect, collaborate, or reach out about product work.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white/10"
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home2;

import React from "react";
import Reveal from "../Reveal";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Skolee",
    description:
      "An education product in active development focused on simplifying the day-to-day operating system around schools, learning workflows, and communication touchpoints.",
    imgPath:
      "https://play-lh.googleusercontent.com/w8UTe6zeEoxDNaSsZxENCb_gYcv02OAmdCM3KIJc6YXjZKLnMjuiYbf5_I5FfRqKyQ=w5120-h2880-rw",
    category: "EdTech",
    status: "Current build",
    stack: ["React Native", "Operations UX", "Product systems"],
  },
  {
    title: "Tuition Notes",
    description:
      "A learning-focused product shaping how tuition content, notes, and classroom resources are organized, delivered, and reused for students and teachers.",
    imgPath:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    category: "EdTech",
    status: "Current build",
    stack: ["Content workflows", "Student UX", "Mobile-first"],
  },
  {
    title: "Staymesh",
    description:
      "A hospitality and stay-management product exploring smoother guest journeys, operational clarity, and better coordination across the full accommodation experience.",
    imgPath:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    category: "Hospitality",
    status: "Current build",
    stack: ["Operations", "Experience design", "Platform thinking"],
  },
  {
    title: "ClassVeew",
    description:
      "A comprehensive school management platform for preschools and kindergartens in Qatar, covering enrollment, documents, admin operations, and scorecard configuration.",
    imgPath:
      "https://play-lh.googleusercontent.com/w8UTe6zeEoxDNaSsZxENCb_gYcv02OAmdCM3KIJc6YXjZKLnMjuiYbf5_I5FfRqKyQ=w5120-h2880-rw",
    category: "School SaaS",
    status: "Shipped",
    stack: ["Admin panel", "Enrollment", "Scoring"],
    demoLink: "https://apps.apple.com/lk/app/classveew/id6747874553",
  },
  {
    title: "Ferry-Pay",
    description:
      "A mobile banking companion that helps payroll card holders manage spending, rewards, and card controls with a clean, friendly UX.",
    imgPath:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/62/b9/84/62b98452-5911-3a99-ea44-d592ecc6d91e/b995f253-4208-47a0-87f6-f82c5caf3d9a_Simulator_Screenshot_-_Screen_Shot_6.5_Inch_-_2023-11-16_at_18.39.30.png/460x0w.webp",
    category: "Fintech",
    status: "Shipped",
    stack: ["Mobile banking", "Card controls", "Rewards UX"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.ferrywalletnative&pcampaignid=web_share",
  },
  {
    title: "Apollo Art",
    description:
      "A gallery-in-your-pocket experience that curates digital art playlists, syncs to smart TVs, and bridges collectors with marketplaces.",
    imgPath:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e7/c0/be/e7c0be12-e438-9982-9588-ebf874a157fe/4b383c45-b8fd-47d8-8ef6-ff68c9f3f7a4_iPhone_6.5_4.png/460x0w.webp",
    category: "Art-tech",
    status: "Shipped",
    stack: ["Curation", "Smart TV", "Marketplace"],
    demoLink: "https://apps.apple.com/lk/app/apollo-art/id1486426294",
  },
  {
    title: "SpotonMoney",
    description:
      "A fintech suite for global transfers across mobile, web, and admin portals built with React Native and a secure cloud-native stack.",
    imgPath:
      "https://play-lh.googleusercontent.com/qJy0E5oJigbFUc1ltlG9bb84gKnnp8o_qT1LgalwZK4FMrdxXidm6r9ja117DqOltxdE=w5120-h2880-rw",
    category: "Fintech",
    status: "Shipped",
    stack: ["Transfers", "Cloud-native", "Cross-platform"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.spoton.spotonmoney",
  },
  {
    title: "Namasthe India",
    description:
      "An e-commerce platform tailored for restaurants with deep integrations, Redux-driven flows, and containerized backends for scale.",
    imgPath:
      "https://play-lh.googleusercontent.com/eiFRTdlhZHtpAFK2BRd9IzNbniQH6wbL3haK3A9tN69AVQO_TmB9NrA9R1IQGIu6cPk=w5120-h2880-rw",
    category: "Commerce",
    status: "Shipped",
    stack: ["Ordering", "Redux", "Containers"],
    demoLink: "https://play.google.com/store/apps/details?id=com.namastheindia",
  },
  {
    title: "RestaurantX",
    description:
      "An intuitive ordering platform enabling pickup, delivery, and reservations, crafted to streamline operations for restaurant teams.",
    imgPath:
      "https://play-lh.googleusercontent.com/Gwx6NY2SHOPaceiJBH3AAd6UJNbY1s1ZK3m4VElVdyXoXHGS1_pjTimsiXO8XW8E3QA-=w5120-h2880-rw",
    category: "FoodTech",
    status: "Shipped",
    stack: ["Pickup", "Delivery", "Reservations"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.foodlober.codelantic",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 text-center">
        <Reveal className="space-y-3">
          <p className="section-kicker">Selected products</p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Products I’m building and the platforms I’ve <span className="text-gradient-animate">already shipped</span>
          </h2>
          <p className="mx-auto max-w-3xl text-slate-300">
            The current chapter is more product-led: education, hospitality, fintech, and commerce experiences built
            with strong mobile foundations and thoughtful systems behind the UI.
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 text-left md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Now building</p>
              <p className="mt-2 text-xl font-semibold text-white">Skolee, Tuition Notes, Staymesh</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Strength</p>
              <p className="mt-2 text-xl font-semibold text-white">Product thinking + production delivery</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Core stack</p>
              <p className="mt-2 text-xl font-semibold text-white">React Native, React, TypeScript, AI tooling</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 70}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

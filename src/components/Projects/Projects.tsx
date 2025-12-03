import React from "react";
import ProjectCard from "./ProjectCards";

const projects = [
  // --- ClassVeew moved to top ---
  {
    title: "ClassVeew",
    description:
      "ClassVeew is a comprehensive school management platform designed to streamline academic and administrative workflows for preschools and kindergartens in Qatar. It includes a powerful admin panel handling everything from enrollment and document management to advanced scorecard configuration.",
    imgPath:
      "https://play-lh.googleusercontent.com/w8UTe6zeEoxDNaSsZxENCb_gYcv02OAmdCM3KIJc6YXjZKLnMjuiYbf5_I5FfRqKyQ=w5120-h2880-rw",
    demoLink: "https://apps.apple.com/lk/app/classveew/id6747874553",
  },

  {
    title: "Ferry-Pay",
    description:
      "A mobile banking companion that helps payroll card holders manage spending, rewards, and card controls with a clean, friendly UX.",
    imgPath:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/62/b9/84/62b98452-5911-3a99-ea44-d592ecc6d91e/b995f253-4208-47a0-87f6-f82c5caf3d9a_Simulator_Screenshot_-_Screen_Shot_6.5_Inch_-_2023-11-16_at_18.39.30.png/460x0w.webp",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.ferrywalletnative&pcampaignid=web_share",
  },
  {
    title: "Apollo Art",
    description:
      "A gallery-in-your-pocket experience that curates digital art playlists, syncs to smart TVs, and bridges collectors with marketplaces.",
    imgPath:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e7/c0/be/e7c0be12-e438-9982-9588-ebf874a157fe/4b383c45-b8fd-47d8-8ef6-ff68c9f3f7a4_iPhone_6.5_4.png/460x0w.webp",
    demoLink: "https://apps.apple.com/lk/app/apollo-art/id1486426294",
  },
  {
    title: "SpotonMoney",
    description:
      "A fintech suite for global transfers across mobile, web, and admin portals built with React Native and a secure cloud-native stack.",
    imgPath:
      "https://play-lh.googleusercontent.com/qJy0E5oJigbFUc1ltlG9bb84gKnnp8o_qT1LgalwZK4FMrdxXidm6r9ja117DqOltxdE=w5120-h2880-rw",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.spoton.spotonmoney",
  },
  {
    title: "Namasthe India",
    description:
      "An e-commerce platform tailored for restaurants with deep integrations, Redux-driven flows, and containerized backends for scale.",
    imgPath:
      "https://play-lh.googleusercontent.com/eiFRTdlhZHtpAFK2BRd9IzNbniQH6wbL3haK3A9tN69AVQO_TmB9NrA9R1IQGIu6cPk=w5120-h2880-rw",
    demoLink: "https://play.google.com/store/apps/details?id=com.namastheindia",
  },
  {
    title: "RestaurantX",
    description:
      "An intuitive ordering platform enabling pickup, delivery, and reservations, crafted to streamline operations for restaurant teams.",
    imgPath:
      "https://play-lh.googleusercontent.com/Gwx6NY2SHOPaceiJBH3AAd6UJNbY1s1ZK3m4VElVdyXoXHGS1_pjTimsiXO8XW8E3QA-=w5120-h2880-rw",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.foodlober.codelantic",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl space-y-6 px-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">
            My recent <span className="text-brand-200">work</span>
          </h2>
          <p className="text-slate-300">
            A few shipped projects across fintech, commerce, and art-tech.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

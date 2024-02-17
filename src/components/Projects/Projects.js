import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/62/b9/84/62b98452-5911-3a99-ea44-d592ecc6d91e/b995f253-4208-47a0-87f6-f82c5caf3d9a_Simulator_Screenshot_-_Screen_Shot_6.5_Inch_-_2023-11-16_at_18.39.30.png/460x0w.webp'}
              isBlog={false}
              title="Ferry-Pay"
              description="The Ferry Mobile App is the easiest way to manage your money, earn rewards and track your spending, for Ferry Payroll Card account holders. The app is free to download and puts you in control with 24/7 access to your account and card management."
              demoLink="https://play.google.com/store/apps/details?id=com.ferrywalletnative/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/e7/c0/be/e7c0be12-e438-9982-9588-ebf874a157fe/4b383c45-b8fd-47d8-8ef6-ff68c9f3f7a4_iPhone_6.5_4.png/460x0w.webp'}
              isBlog={false}
              title="Apollo Art"
              description="Apollo is a user-friendly mobile app for creating custom playlists from renowned artists. It turns any smart-enabled TV into a digital gallery. The app combines mobile experience, art collection, e-commerce, and a community of collectors. The NFTs page displays Apollo NFTs and other NFTs purchased from marketplaces like Opensea and Nifty gateway."
              demoLink="https://apps.apple.com/lk/app/apollo-art/id1486426294"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://play-lh.googleusercontent.com/qJy0E5oJigbFUc1ltlG9bb84gKnnp8o_qT1LgalwZK4FMrdxXidm6r9ja117DqOltxdE=w5120-h2880-rw'}
              isBlog={false}
              title="SpotonMoney"
              description="SpotonMoney is a FINTEC mobile banking app designed for global money transfers. It consists of three main applications: a React Native-based mobile app for Android and iOS, a React-powered web app, and an admin portal."
       
              demoLink=" https://play.google.com/store/apps/details?id=com.spoton.spotonmoney"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://play-lh.googleusercontent.com/eiFRTdlhZHtpAFK2BRd9IzNbniQH6wbL3haK3A9tN69AVQO_TmB9NrA9R1IQGIu6cPk=w5120-h2880-rw'}
              isBlog={false}
              title="Namasthe India"
              description="Another noteworthy project I led was the development of Namasthe India, an innovative e-commerce platform specifically tailored for restaurant management. The project involved a seamless integration of front-end and back-end systems, which greatly optimized performance and scalability. Key implementations in the project included the use of Redux for efficient state management and Docker for containerization of the Spring Boot backend, a strategy that significantly enhanced reliability and scalability. The technologies employed in this project spanned across React Native, Android, Objective-C, Spring Boot, MySQL, Crashlytics, AWS, JSX, Redux, Redux-Sagas, Swift, and CI/CD."
              demoLink="https://play.google.com/store/apps/details?id=com.namastheindia"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://play-lh.googleusercontent.com/Gwx6NY2SHOPaceiJBH3AAd6UJNbY1s1ZK3m4VElVdyXoXHGS1_pjTimsiXO8XW8E3QA-=w5120-h2880-rw'}
              isBlog={false}
              title="RestaurantX"
              description="In my role at RestaurantX, I was instrumental in developing an intuitive online food ordering platform that has bridged the gap between restaurant owners and customers. This platform empowered users to conveniently order food, arrange pickups or deliveries, and reserve tables, fostering seamless interactions and transactions."
              demoLink="https://play.google.com/store/apps/details?id=com.foodlober.codelantic"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

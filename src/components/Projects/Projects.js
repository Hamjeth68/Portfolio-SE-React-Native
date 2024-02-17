




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
              imgPath={chatify}
              isBlog={false}
              title="Ferry-Pay"
              description="The Ferry Mobile App is the easiest way to manage your money, earn rewards and track your spending, for Ferry Payroll Card account holders. The app is free to download and puts you in control with 24/7 access to your account and card management."
              demoLink="https://play.google.com/store/apps/details?id=com.ferrywalletnative"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Apollo Art"
              description="Apollo is a user-friendly mobile app for creating custom playlists from renowned artists. It turns any smart-enabled TV into a digital gallery. The app combines mobile experience, art collection, e-commerce, and a community of collectors. The NFTs page displays Apollo NFTs and other NFTs purchased from marketplaces like Opensea and Nifty gateway."
              demoLink="https://apps.apple.com/lk/app/apollo-art/id1486426294"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SpotonMoney"
              description="SpotonMoney is a FINTEC mobile banking app designed for global money transfers. It consists of three main applications: a React Native-based mobile app for Android and iOS, a React-powered web app, and an admin portal."
       
              demoLink=" https://play.google.com/store/apps/details?id=com.spoton.spotonmoney"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Namasthe India"
              description="Another noteworthy project I led was the development of Namasthe India, an innovative e-commerce platform specifically tailored for restaurant management. The project involved a seamless integration of front-end and back-end systems, which greatly optimized performance and scalability. Key implementations in the project included the use of Redux for efficient state management and Docker for containerization of the Spring Boot backend, a strategy that significantly enhanced reliability and scalability. The technologies employed in this project spanned across React Native, Android, Objective-C, Spring Boot, MySQL, Crashlytics, AWS, JSX, Redux, Redux-Sagas, Swift, and CI/CD."
              demoLink="https://play.google.com/store/apps/details?id=com.namastheindia"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
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


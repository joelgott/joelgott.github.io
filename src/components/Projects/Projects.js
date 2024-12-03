import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nnhd from "../../Assets/Projects/nnhd.png";
import inguide from "../../Assets/Projects/inguide.png";
import grad9000 from "../../Assets/Projects/grad9000.jpg";
import codeled from "../../Assets/Projects/codeled.jpg";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={grad9000}
              isBlog={false}
              title="GRAD 9000"
              description="Guardian robotico, acompañante domestico. This project is strongly inspired by the HAL9000 robot from Stanley Kubrick's 2001 Space Odyssey. I used an ESP32 based board for the main logic and an audio module so that it looks like it's talking. Most of the mechanical parts are recicled or 3D printed."
              ghLink="https://github.com/joelgott/GRAD9000"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={codeled}
              isBlog={false}
              title="CodeLed"
              description="This project is a toy for those interested in learning how morse code works. It has an led that blinks following the morse code protocol and a display that shows which character is currently being transmitted. The objective is to decode the phrase being transmitted (ideally not looking at the display)."
              ghLink="https://github.com/joelgott/CodeLed"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={inguide}
              isBlog={false}
              title="INGuide"
              description="This videogame aims to make engineering and STEMs look more appealing by learning through gaming."
              ghLink="https://github.com/joelgott/INGuide"
              demoLink="https://joelgott.itch.io/inguide"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={nnhd}
              isBlog={true}
              title="Neural Networks for hidrogel detection"
              description="Used a custom made dataset to train a yolov7 neural network and then used it to detect hidrogels falling through a hopper."
              ghLink="/nnhd"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

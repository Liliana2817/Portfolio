import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.jpg";
import projImg2 from "../assets/img/img2.jpg";
import projImg3 from "../assets/img/img3.jpg";
import projImg4 from "../assets/img/img4.jpg";
import projImg5 from "../assets/img/img5.png";
import projImg6 from "../assets/img/img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import  'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "triviamorphosis",
      description: "Este proyecto fue en Equipo trata sobre un juego que va con chap gpt",
      imgUrl: projImg1,
    },
    {
      title: "triviamorphosis",
        description: "Este proyecto es sobre una ruleta que lanza preguntas sobre programación",
      imgUrl: projImg2,
    },
    {
      title: "trinity",
      description: "Este proyecto fue creado en equipo es de como logearse con fondo matrix",
      imgUrl: projImg3,
    },
    {
      title: "trinity",
      description: "este proyecto fue creado en equipo y esta de logearse de forma segura",
      imgUrl: projImg4,
    },
    {
      title: "Pagina wed",
      description: "Esta pagina es sobre una pagina web que use de una plantilla",
      imgUrl: projImg5,
    },
    {
      title: "E-comerce",
      description: "Esta pagina es sobre una pagina web  de ecomerceque use de una plantilla",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projectos</h2>
                <p>Conseguir un puesto de trabajo que me permita aplicar mis experiencias y conocimientos en mi sector y en las distintas áreas de la empresa, para así desarrollarme profesionalmente para el buen desempeño de las funciones asignadas. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
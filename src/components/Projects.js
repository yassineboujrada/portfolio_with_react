import React  from 'react';
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ml.jpeg";
import projImg2 from "../assets/img/shop.png";
import projImg3 from "../assets/img/desktop-app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "Gender Prediction from Voice",
      description: "Machine Learning",
      imgUrl: projImg1,
    },
    {
      title: "Store web site",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Hotel Management App",
      description: "Desktop Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div className="">
                <h2>Projects</h2>
                <p>My best apps and projects that I did</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className="">
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
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}
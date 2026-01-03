import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/eco.png";
import projImg2 from "../assets/img/event.png";
import projImg3 from "../assets/img/cinema.png";
import projImg4 from "../assets/img/insta.png";
import video1 from "../assets/vdo/insta-improved.mp4";
import video2 from "../assets/vdo/vd2.mp4";
import video3 from "../assets/vdo/vdo3.mp4";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsTab1 = [
    { id: 1, title: "EcoBazaarX-Carbon-Footprint-Aware-Shopping ", description: "MERN | End-to-end event booking", imgUrl: projImg1, videoUrl: video1,githubUrl: "https://github.com/yourname/portfolio",
    techStack: ["React", "Bootstrap"] },
    { id: 2, title: "Event Management Website", description: "This is a simple and responsive Event Management web app where users can sign up, log in, log out, and create events. Built with HTML, JavaScript, and styled using Tailwind CSS. It includes basic authentication and event handling features.",
       imgUrl: projImg2,videoUrl:video3 ,githubUrl: "https://github.com/ANSHIKA45545/Event_Management",
    techStack: ["Frontend: React (Vite) , Tailwind CSS", "Backend: Node.js, Express.js", "Database: MongoDB", "API Communication: REST APIs", "Tools & Utilities: Git, GitHub, VS Code"]},
    { id: 3, title: "Cinemate", description: "Cinemate : Built with React and TMDB API to dynamically fetch and showcase movies, enabling users to explore trending titles, view ratings, and access detailed movie information.", 
      imgUrl: projImg3,videoUrl: video2 ,
      githubUrl: "https://github.com/ANSHIKA45545/cinemate",
    techStack: ["Frontend: React.js", "API: The Movie Database (TMDB) API", "Styling: CSS / Bootstrap", "HTTP Client: Fetch API / Axios", "State Management: React Hooks (useState, useEffect)", "Deploy: Netlify"]},
    { id: 4, title: "Insta-Improved", description: "It is a full-stack social messaging platform that integrates machine learning for intelligent post classification and moderation. It supports real-time chat using Socket.IO, secure authentication with JWT, and a scalable architecture built with React, Node.js, MongoDB, and Python-based ML services.", 
      imgUrl: projImg4, videoUrl: video1 ,githubUrl: "https://github.com/ANSHIKA45545/Insta-Improve",
    techStack: ["Frontend: React, Axios, Tailwind CSS", "Backend: Node.js, Express" , "Database: MongoDB" ,"Real-time: Socket.IO ", "Machine Learning: Python, scikit-learn / TensorFlow / PyTorch", "Other: dotenv, CORS, JWT"]},
  ];

  const projectsTab2 = [
    // { id: 5, title: "Smart Tourism Ecosystem (STEI)", description: "AI-based travel planning | Yukti AVF", imgUrl: projImg1 , videoUrl: "../assets/videos/event-demo.mp4",githubUrl: "https://github.com/yourname/portfolio",
    // techStack: ["React", "Bootstrap"]},
    // { id: 6, title: "ReWear – Clothing Exchange", description: "React + Node | Sustainable fashion platform", imgUrl: projImg2, videoUrl: "../assets/videos/event-demo.mp4" ,githubUrl: "https://github.com/yourname/portfolio",
    // techStack: ["React", "Bootstrap"]},
    // { id: 7, title: "Handwriting OCR & Translate", description: "Transformer OCR | Text-to-language", imgUrl: projImg3, videoUrl: "../assets/videos/event-demo.mp4",githubUrl: "https://github.com/yourname/portfolio",
    // techStack: ["React", "Bootstrap"] },
    // { id: 8, title: "Task Manager App", description: "MERN | JWT Auth + CRUD", imgUrl: projImg1, videoUrl: "../assets/videos/event-demo.mp4", githubUrl: "https://github.com/yourname/portfolio",
    // techStack: ["React", "Bootstrap"]},
  ];

  if (selectedProject) {
  return (
    <section style={{ padding: "2rem", color: "white", paddingBottom: "80px" }}>
      <button onClick={() => setSelectedProject(null)} className="back-btn">← Back to Projects</button>
      <h2 className="detail-title">{selectedProject.title}</h2>
      <Row style={{ marginTop: "2rem" }}>
        
        <Col md={6}>
          {selectedProject.videoUrl ? (
            <video
              src={selectedProject.videoUrl}
              controls
              width="100%"
              style={{ borderRadius: "15px" }}
            />
          ) : (
            <img
              src={selectedProject.imgUrl}
              alt={selectedProject.title}
              width="100%"
              style={{ borderRadius: "15px" }}
            />
          )}
        </Col>

        <Col md={6}>
          <p>{selectedProject.description}</p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" style={{ color: "lightblue" }}>
              View Repo
            </a>
          </p>

          <strong>Tech Stack:</strong>
          <ul>
            {selectedProject.techStack?.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Col>

      </Row>
    </section>
  );
}



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A showcase of my key projects demonstrating my full-stack development skills, problem-solving abilities, and expertise in building responsive, user-friendly, and high-performance web applications.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">AI & Other</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              onClick={() => setSelectedProject(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              onClick={() => setSelectedProject(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};


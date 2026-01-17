import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertificateCard } from "./CertificateCard";
import projImg1 from "../assets/img/eco.png";
import projImg2 from "../assets/img/event.png";
import projImg3 from "../assets/img/cinema.png";
import projImg4 from "../assets/img/insta.png";
import projImg5 from "../assets/img/extend.png";
import video1 from "../assets/vdo/insta-improved.mp4";
import video2 from "../assets/vdo/vdo2.mp4";
import video3 from "../assets/vdo/vido3.mp4";
import img0 from "../assets/img/best.jpeg";
import img1 from "../assets/img/forage.jpeg";
import img2 from "../assets/img/hack.jpeg";
import img3 from "../assets/img/iic.jpeg";
import img4 from "../assets/img/iste.jpeg";
import img5 from "../assets/img/reckon.jpeg";
import img6 from "../assets/img/l&t.jpeg";
import img7 from "../assets/img/gyan.jpeg";
import img8 from "../assets/img/neptel.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);


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
    { id: 5, title: "Youtube Extension", description: "A Chrome extension built with Manifest V3 that enhances the YouTube experience by dynamically modifying page elements using content scripts and event handling", 
      imgUrl: projImg5, videoUrl: video1 ,githubUrl: "https://github.com/ANSHIKA45545/YouTube-Bookmarks-Extension",
    techStack: ["Javascript, Chrome Extension, manifest.json"]},
  ];

  const certificates = [
    {
    id: 0, title: "Larsen & Toubro Edutech",  imgUrl: img0,
  },
  {
    id: 1, title: "Forage",  imgUrl: img1,
  },
  {
    id: 2, title: "Hackathon",  imgUrl: img2,
  },
  {
    id: 3, title: "IIC Regional Meet",  imgUrl: img3,
  },
  {
    id: 4, title: "ISTE Membership", imgUrl: img4,
  },
  {
    id: 5, title: "Reckon",  imgUrl: img5,
  },
  {
    id: 6, title: "React.js Certificated", imgUrl: img6,
  },
  {
    id: 7, title: "GyanNetra", imgUrl: img7,
  },
  {
    id: 8, title: "NEPTEL Topper",  imgUrl: img8,
  },
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

  if (selectedCertificate) {
    return (
      <section
        style={{
          minHeight: "100vh",
          padding: "30px",
          backgroundColor: "#0b0b0b",
          color: "white",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2>{selectedCertificate.title}</h2>

          <button
            onClick={() => setSelectedCertificate(null)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "26px",
              color: "white",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* CERTIFICATE IMAGE */}
        <div style={{ textAlign: "center" }}>
          <img
            src={selectedCertificate.imgUrl}
            alt={selectedCertificate.title}
            style={{
              maxWidth: "60%",
              maxHeight: "90vh",
              borderRadius: "15px",
              boxShadow: "0 0 30px rgba(255,255,255,0.1)",
            }}
          />

        </div>
      </section>
    );
  }



    return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects & Certifications</h2>
                  <p>A curated collection of my full-stack projects and professional certifications demonstrating my technical skills, problem-solving ability, and continuous learning.</p>

                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      {/* PROJECTS */}
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

                      {/* CERTIFICATES */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {certificates.map((cert) => (
                            <CertificateCard
                              key={cert.id}
                              title={cert.title}
                              issuer={cert.issuer}
                              imgUrl={cert.imgUrl}
                              onClick={() => setSelectedCertificate(cert)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

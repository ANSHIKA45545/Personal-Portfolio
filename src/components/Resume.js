import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const ResumeCTA = () => {
  return (
    <section className="resume-cta">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInUp resume-box"
                      : "resume-box"
                  }
                >
                  <Row className="align-items-center">
                    
                    {/* LEFT CONTENT */}
                    <Col md={8}>
                      <h3>Let’s Work Together 🚀</h3>
                      <p>
                        I’m actively seeking Full Stack / Software Engineer Intern
                        opportunities. If you like my work, feel free to download
                        my resume and connect with me.
                      </p>
                    </Col>

                    {/* RIGHT BUTTON */}
                    <Col md={4} className="text-md-end text-center">
                      <a
                        href="/Anshika_Yadav.pdf"
                        download
                        className="btn btn-primary btn-lg"
                      >
                        📄 Download Resume
                      </a>
                    </Col>

                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

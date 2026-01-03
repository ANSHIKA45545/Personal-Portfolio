import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4} style={{ marginBottom: "2rem" }}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* Add the link below */}
          <p>
            <a href="#!" onClick={onClick} style={{ color: "#00f", textDecoration: "underline" }}>
              View Project
            </a>
          </p>
        </div>
      </div>
    </Col>
  );
};

import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, issuer, imgUrl, onClick }) => {
  return (
    <Col md={4} sm={6} className="mb-4">
      <div
        className="proj-imgbx"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <img src={imgUrl} alt={title} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{issuer}</span>
        </div>
      </div>
    </Col>
  );
};

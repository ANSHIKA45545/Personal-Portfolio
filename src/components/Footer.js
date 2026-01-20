import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/my_logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/code.png";
import { ResumeCTA } from "./Resume";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <ResumeCTA />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anshika-yadav-308b6127a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ANSHIKA45545"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/anshika_y11/?hl=en"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://leetcode.com/u/Anshika_Yadav01/"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

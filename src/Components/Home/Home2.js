import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn, FaSkype, FaWhatsapp } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming. I have 2 years experience in System Development.
              My primary focus is on ensuring that software development and operations teams work together effectively to deliver high-quality software products and services.
              My role involves automating and streamlining the software development process, from code creation to deployment and beyond, using a variety of tools and techniques. This includes continuous integration and deployment (CI/CD), infrastructure as code (IaC), monitoring and logging, Microservices like Docker, Kubernetes, and more.
              In addition to technical skills, I also possess strong communication and collaboration abilities, as I work closely with both developers and operations teams to ensure seamless integration and delivery of software. My goal is to enable faster, more reliable software delivery, while ensuring that the overall system is secure, scalable, and highly available.
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple"> Technologies and Products </b>
              </i>
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:+959951643505" className="con-det">
                  +95 9951643505
                </a>
              </div>
              <div>
                <EmailIcon
                  className="con_ico"
                  color="secondary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:waiphyo3498@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  waiphyo3498@gmail.com
                </a>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/waiiphyo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://join.skype.com/invite/YPXgcwvcObxT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaSkype />
                  
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wai-phyo-5307081bb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.link/wzdle4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

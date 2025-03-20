import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdOutgoingMail } from "react-icons/bs";
const Footer = () => {

  return (
    <>
      <footer
        className="mt-5 p-5 footer"
        style={{
          background: "rgba(145, 95, 247, 0.64)", // Matching Navbar color
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 -8px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px 12px 0 0",
          color: "#313131", // Dark gray for contrast
        }}
      >
        <Container>
          <Row>
            <Col md={6}>

              <div
                style={{
                  width: "50px",   /* Adjust the size */
                  height: "50px",
                  borderRadius: "50%",  /* Makes it round */
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "#f8f9fa" /* Optional background */
                }}
              >
                <img
                  src={logo}
                  alt="TechHub Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h3>
                <span className="ms-2 techhub-text">TechHub</span>
              </h3>
              <p className="text-white">
                TechHub empowers learners with top-quality courses, fostering growth, skills, and lifelong learning in a vibrant community.
              </p>


            </Col>
            <Col md={3}>
              <h3 className="text-white">Links</h3>
              <ul className="list-unstyled mb-0">
                <Link to="/" className="glass-link text-white">
                  <li>Home</li>
                </Link>
                <Link to="/about-us" className="glass-link text-white">
                  <li>About Us</li>
                </Link>
                <Link to="/contact-us" className="glass-link text-white">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </Col>
            <Col md={3} className="mt-3 mt-lg-0">
              <h3 className="text-white">Contact Us</h3>
              <p className="text-white">
                <BiLogoGmail size={20} /> ha7325897@gmail.com
              </p>
              <p className="text-white">
                <BsFillTelephoneFill size={16} /> +92-3054935143
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div
        className="p-3 text-center"
        style={{
          background: "rgba(145, 95, 247, 0.64)",
          backdropFilter: "blur(10px)",
          color: "#ffffff",
        }}
      >
        <p className="mb-0">
          Techhub | &copy; All Rights Reserved. {new Date().getFullYear()}
        </p>
      </div>
    </>
  );

};

export default Footer;



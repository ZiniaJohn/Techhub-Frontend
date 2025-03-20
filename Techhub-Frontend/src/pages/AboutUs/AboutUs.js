
import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import aboutUsImage from "../../Images/laptop1.png";
import { NavLink } from "react-router-dom";
import greenDoodle from "../../Images/green-doodle.svg";

const AboutUs = () => {
                 
  return (
    <StyledWrapper>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <p className="paragraph">
              About TechHub
            </p>
            <h1 className="main-title">
              Empowering students through expert-led{" "}
              <span
                className="green-doodle"
                style={{ backgroundImage: `url(${greenDoodle})` }}
              >
                learning.
              </span>
            </h1>
            <p className="description">
              TechHub is your gateway to world-class education, connecting learners with industry experts
              through an engaging and interactive platform.
            </p>
            <NavLink to="/Register">
              <button className="cta">
                <span>Get Started for Free</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </NavLink>
          </Col>
          <Col md={6} className="text-center position-relative custom-col-padding">
            <StyledImage src={aboutUsImage} alt="Learning" />
            <div className="background-shape" />
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #f8f9fc, #ffffff);
  padding: 60px 0;

  .main-title {
    font-size: 2rem;
    font-weight: 800;
    color: #2b2d42;
    margin-bottom: 20px;
  }
  
  .paragraph {
  color: #6c757d;
  padding-top: 40px;
  }

  .highlight {
    color: #4a90e2;
  }

  .description {
    font-size: 1.2rem;
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .cta {
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}


  .background-shape {
    position: absolute;
    width: 250px;
    height: 250px;
    background: #4a90e2;
    border-radius: 50%;
    opacity: 0.2;
    top: -10px;
    right: -40px;
    
  }

  .custom-col-padding {
    padding-top: 70px; /* Adjust the value as needed */
  }

  .green-doodle {
    background-image: url("/Images/green-doodle.svg");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 170px;
}
`;

const StyledImage = styled.img`
  max-width: 90%;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;


export default AboutUs;


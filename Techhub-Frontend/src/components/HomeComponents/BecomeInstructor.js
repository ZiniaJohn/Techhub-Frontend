import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import instsecond from "../../Images/instsecond.jpg";

const testimonials = [
  {
    name: "Sara Alexander",
    role: "Product Designer, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it.",
  },
  {
    name: "Melissa Roberts",
    role: "Product Designer, USA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it.",
  },
  {
    name: "David Johnson",
    role: "Software Engineer, UK",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it.",
  },
];

const BecomeInstructor = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Instructor Section */}
      <Container className="p-5">
        <Row>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center p-5 text-center"
          >
            <h1 style={{ color: "black", fontWeight: "bold" }}>
              Embrace the Position of Mentor
            </h1>
            <p style={{ lineHeight: "2", color: "black", fontWeight: "bold" }}>
              Millions of students on TechHub are guided by instructors worldwide,
              as we equip them with the necessary tools and knowledge to teach
              subjects they are passionate about.
              <br />
              On TechHub, instructors from various countries impart knowledge to 
              millions of students, empowering them with the resources and competencies 
              to teach their passions.
            </p>
           
          </Col>
          <Col md={6} className="p-5">
            <img
              src={instsecond}
              alt="instructor"
              className="img-fluid inst-img"
            />
          </Col>
        </Row>
      </Container>

      {/* Gap Between Sections */}
      <div className="mx-1"></div>

      {/* Student Testimonials Section */}
      <Container className="p-5">
        <div className="text-center">
          <p style={{ color: "#6a0dad", fontWeight: "bold" }}>Student Testimonial</p>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "black" }}>
            Feedback From{" "}
            <span style={{ color: "#6a0dad", fontWeight: "bold" }}>Student</span>
          </h2>
        </div>

        <Row className="d-flex justify-content-between flex-nowrap mt-4">
          {testimonials.map((testimonial, index) => (
            <Col
              key={index}
              md={4}
              className="p-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #ddd",
                flex: "0 0 auto", // Prevents shrinking
                width: "30%", // Adjust width to fit all in one row
                margin: "10px",
              }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "4px solid #6a0dad",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "25px",
                    right: "-35px",
                    fontSize: "28px",
                    color: "#6a0dad",
                  }}
                >
                  ➤
                </span>
              </div>

              <p
                style={{
                  color: "black",
                  fontSize: "14px",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                {testimonial.review}
              </p>

              <h4 style={{ marginTop: "10px", fontWeight: "bold", color: "black" }}>
                {testimonial.name}
              </h4>
              <p style={{ color: "black", fontSize: "13px", fontWeight: "bold" }}>
                {testimonial.role}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BecomeInstructor;

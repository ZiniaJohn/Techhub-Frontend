import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
const HomeVideo = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      {/* Instructor Invitation Section */}
      <Card
       className="p-5 text-center rounded"
       style={{
         backgroundColor: "#E6E6FA", // Light Purple
         border: "none",
         position: "relative",
         padding: "50px", // Increased padding for better spacing
       }}
      >
        <h5 style={{ color: "#000", fontWeight: "bold" }}>Become A Instructor</h5>
        <h2 style={{ color: "#000", fontWeight: "bold" }}>
          You can join with <span style={{ fontWeight: "bold" }}>TechHub</span> as a{" "}
          <Link 
            to="/Login" 
            style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }}
          >
            instructor?
          </Link>
        </h2>
       <Button
        onClick={() => navigate("/Login")} // Change the path accordingly
        style={{
          backgroundColor: "#007bff", // Primary Blue Color
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
         
        }}
      >
        Sign-Up
      </Button>
      </Card>

      {/* How It Works Section */}
      <div className="text-center mt-5">
        <p style={{ color: "#000", fontWeight: "bold" }}>Over 1,235+ Courses</p>
        <h2 style={{ color: "#000", fontWeight: "bold" }}>
          How It <span style={{ fontWeight: "bold" }}>Work?</span>
        </h2>
      </div>

      <Row className="mt-4 text-center">
        {[{ title: "Find Your Course", icon: "🔍" },
          { title: "Book A Seat", icon: "📄" },
          { title: "Get Certificate", icon: "🎓" },
        ].map((step, index) => (
          <Col md={4} key={index} className="d-flex justify-content-center">
            <Card
              className="p-4 shadow-sm"
              style={{ 
                borderRadius: "10px", 
                minWidth: "250px",
                backgroundColor: "#fff"
              }}
            >
              <div className="fs-2">{step.icon}</div>
              <h5 style={{ color: "#000", fontWeight: "bold" }} className="mt-3">
                {step.title}
              </h5>
              <p style={{ color: "#000", fontWeight: "bold" }}>
                It has survived not only centuries but also leaped into electronic.
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeVideo;

import React from "react";
import { Button, Offcanvas, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import logo from "../../Images/logo-purple.png";
const InstructorOffCanvas = () => {
  // Instructor canvas
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
     <Button
  style={{
    background: "linear-gradient(135deg, #a87fe7, #66a3ff)", // Bootstrap primary gradient
    border: "none",
    borderRadius: "8px",
    color: "white",
    padding: "10px 20px",
    fontWeight: "bold",
  }}
  onClick={handleShow}
  className="position-fixed"
>
  Launch
</Button>

<Offcanvas 
  show={show} 
  onHide={handleClose} 
  style={{ background: "linear-gradient(135deg, #a87fe7, #66a3ff)", color: "white" }}
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>
      <Navbar>
        <NavLink to="/">
          <Navbar.Brand style={{ color: "white", fontWeight: "bold" }}>
          <img src={logo} alt="TechHub Logo" style={{ width: "50px", height: "50px",margin:"4px", borderRadius: "50%", objectFit: "cover" }} />

TECHHUB

          </Navbar.Brand>
        </NavLink>
      </Navbar>
    </Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <Nav className="flex-column">
      <Nav.Link>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
          Become a Student
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/instNewCourseForm" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
          Make a New Course
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/instructor/courses" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
          View Your Courses
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/instructor/analytics" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>
          View Analytics
        </Link>
      </Nav.Link>
    </Nav>
  </Offcanvas.Body>
</Offcanvas>

    </div>
  );
};

export default InstructorOffCanvas;
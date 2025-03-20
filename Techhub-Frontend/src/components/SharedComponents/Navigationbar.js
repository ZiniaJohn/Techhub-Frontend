import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiSololearn } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate, createSearchParams } from "react-router-dom";
import UserProfileDropdown from "../AuthComponents/UserProfileDropdown";
import SmallLoader from "./SmallLoader";
import searchicon from "../../Images/searchicon.png";
import logo from "../../Images/logo.png";

// import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const [keyword, setKeyword] = useState("");

  const { user, logoutMessage, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (logoutMessage) {
      console.log(true);
      toast.success(logoutMessage);
      dispatch(reset());
    }
  }, [logoutMessage, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!keyword) {
      return toast.error("Please Enter your search keyword before searching.");
    }

    let param = {
      keyword,
      price: 10,
      averageRating: 0,
      category: "",
      page: 1,
    };

    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(param)}`,
    });
    setKeyword("");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        background: "rgba(145, 95, 247, 0.64)", // Very light shade of #712cf9 with transparency
        backdropFilter: "blur(20px)", // Smooth frosted effect
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
      className="px-3 py-2"
    >
      <Container fluid>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand className="d-flex align-items-center fw-bold text-dark-gray">
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
            <span className="ms-2 techhub-text">TechHub</span>
          </Navbar.Brand>

        </NavLink>

        <Navbar.Toggle aria-controls="navbarScroll" className="border-0 text-dark-gray" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-start">
          <Nav className="me-auto text-center ms-4">
            <NavLink to="/" className="me-2 ms-4 nav-link glass-link text-white">
              Home
            </NavLink>
            {user && (
              <NavLink to="/user-enrolledCourses" className="me-3 ms-3 nav-link glass-link text-white">
                My Learning
              </NavLink>
            )}
            <NavLink to="/about-us" className="me-3 ms-3 nav-link glass-link text-white">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="me-3 ms-3 nav-link glass-link text-white">
              Contact Us
            </NavLink>
          </Nav>

          <Form onSubmit={submitHandler} className="d-flex align-items-center position-relative my-2 my-lg-0">
            <Form.Control
              className="border-0 px-4 py-2 rounded-pill bg-light search-input pe-5 text-dark-gray"
              type="search"
              size="sm"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search..."
              style={{ paddingRight: "50px", minWidth: "200px" }}
            />

            <Button
              onClick={submitHandler}
              //variant="warning"
              size="sm"
              className="position-absolute top-50 translate-middle-y rounded-circle p-0 d-flex align-items-center justify-content-center"
              style={{ width: "30px", height: "30px", right: "7px", backgroundColor: "#e4be18" }}
            >
              <img src={searchicon} style={{ width: "16px", height: "16px" }} />
            </Button>
          </Form>

          <div className="d-flex align-items-center mt-2 mt-lg-0">
            {isLoading ? (
              <SmallLoader />
            ) : user ? (
              <UserProfileDropdown />
            ) : (
              <>
                <NavLink to="/Login">
                  <Button variant="outline-light" className="ms-2 px-3 py-1 rounded-5 fw-bold glass-button text-white">
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/Register">
                  <Button variant="light" className="ms-2 px-3 py-1 rounded-5 fw-bold glass-button text-dark"
                    style={{ backgroundColor: "white", border: "1px solid white" }}>

                    Sign-Up
                  </Button>
                </NavLink>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

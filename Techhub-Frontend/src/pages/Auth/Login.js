import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import signin from "../../Images/login.jpg";
import { login, reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email) {
      return toast.error("Email is Required.");
    }
    if (!password) {
      return toast.error("Password is Required.");
    }

    dispatch(login(formData));
  };

  useEffect(() => {
    if (user && message) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
        toast.success(message);
        dispatch(reset());
      }
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (user) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
      }
    }
  }, [user, isError, message, dispatch]);

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="d-flex vh-100">
        <div className="w-40 d-none d-md-block">
          <img
            src={signin} // Replace with actual image source
            className="img-fluid"
            alt="Login Illustration"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              marginTop: "10px",
            }}
          />
        </div>
        <Container className="w-50 authWidth p-5">
          <Row>
            <h1
              className="mb-3"
              style={{
                color: "#A45EE9",
                textAlign: "center",
                marginTop: "60px",
              }}
            >
              Login
            </h1>
            <Col>
              <Form
                onSubmit={handleSubmit}
                style={{ borderRadius: "10px", marginTop: "-20px" }}
              >
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        border: "2px solid #A45EE9",
                        outline: "none",
                        fontSize: "1.5rem",
                        color: "#A45EE9",
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button
                  type="submit"
                  className="mt-3"
                  style={{
                    backgroundColor: "#A45EE9",
                    borderRadius: "8px",
                    width: "120px",
                    padding: "8px 15px",
                    fontSize: "1rem",
                  }}
                >
                  Login
                </Button>

                <div className="forgot-password mt-2">
                  <p style={{ color: "#A45EE9" }}>
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      style={{
                        marginLeft: "10px",
                        color: "#A45EE9",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Sign Up Here
                    </Link>
                  </p>
                  <p style={{ color: "#A45EE9" }}>
                    <Link
                      to="/forget-password"
                      style={{
                        color: "#A45EE9",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
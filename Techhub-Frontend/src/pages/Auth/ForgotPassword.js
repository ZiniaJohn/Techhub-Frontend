import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { forgotPassword, reset } from "../../redux/reducers/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import remember from "../../Images/forgot password.jpg";
import { toast } from "react-hot-toast";
import Loader from "../../components/SharedComponents/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { isLoading, message, isError } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Email is Required.");
    }

    dispatch(forgotPassword({ email }));
  };

  useEffect(() => {
    if (message && isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (message && !isError) {
      toast.success(message);
      dispatch(reset());
    }
  }, [message, isError, dispatch]);

  return (

    <div style={{ paddingTop: "200px" }}>
    {isLoading ? (
      <Loader />
    ) : (
      <div className="d-flex vh-100">
        <div className="w-40 d-none d-md-block">
          <img
            src={remember}
            className="img-fluid"
            alt="Login Illustration"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              marginTop: "-70px",
            }}
          />
        </div>
        <Container className="w-50 lh-lg p-5 rounded">
          <Row>
            <Col className="text-center">
              <h1 style={{color:"#A45EE9" ,fontWeight: "bold"}}>Forgot Password</h1>
              <p style={{color:"#A45EE9"}}>
                Please provide the email address you used when you signed up for
                your TechHub account.
              </p>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="forEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Button style={{ backgroundColor: "#A45EE9", color: "white", borderRadius: "8px" }} type="submit">
                  Send email{" "}
                  <span style={{Backgroundcolor:"#A45EE9"}}>
                    <AiOutlineArrowRight />
                  </span>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )}
  </div>
);
};

export default ForgotPassword;

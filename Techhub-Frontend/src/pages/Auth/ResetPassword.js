import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/reducers/auth/authSlice";
import { reset } from "../../redux/reducers/auth/authSlice";
import remember from "../../Images/forgot password.jpg";
import Loader from "../../components/SharedComponents/Loader";

const ResetPassword = () => {
  const { token } = useParams();

  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, message, isError } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!newPassword) {
      return toast.error("New Password is Required.");
    }

    dispatch(resetPassword({ token, newPassword }));
  };

  useEffect(() => {
    if (message && isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (message && !isError) {
      toast.success(message);
      navigate("/Login");
      dispatch(reset());
    }
  }, [message, isError, dispatch]);

  return (
<div style={{ paddingTop: "100px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="d-flex vh-100 align-items-center justify-content-center">
          
          <div className="d-none d-md-block col-md-5">
            <img
              src={remember}
              className="img-fluid"
              alt="Login Illustration"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                marginTop: "-50px",
              }}
            />
          </div>

          {/* Form Section */}
          <Container className="w-50 lh-lg p-5 rounded" style={{marginTop: "-30px"}}>
            <Row>
              <Col className="text-center">
                <h1 style={{color:"#A45EE9" ,fontWeight: "bold",marginTop: "-30px"}}>Reset PASSWORD</h1>
                <p style={{color:"#A45EE9"}}>Please enter your new password.</p>

                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="New Password"
                      name="password"
                      className="mb-3"
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </Form.Group>
                  <Button style={{ backgroundColor: "#A45EE9", color: "white", borderRadius: "8px" }} type="submit">
                    Reset Password <AiOutlineArrowRight />
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

export default ResetPassword;

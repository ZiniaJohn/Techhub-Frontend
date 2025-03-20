import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";
import remember from "../../Images/forgot password.jpg";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/SharedComponents/Loader";

import PasswordUpdate from "../../components/ProfileComponents/PasswordUpdate";
import { getUserInfo, reset } from "../../redux/reducers/user/userSlice";

const EditPassword = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );
  

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && message) {
      toast.success(message);
      dispatch(reset());
    }

    dispatch(getUserInfo());
  }, [isError, isSuccess, message]);

  return (
    <div style={{ paddingTop: "130px" }}>
    {isLoading ? (
      <Loader />
    ) : (
      <div className="d-flex vh-100 align-items-center justify-content-center">
        <Row className="w-100">
          {/* Image Section */}
          <Col md={5} className="d-none d-md-block">
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
          </Col>

          {/* Form Section */}
          <Col md={7} className="d-flex justify-content-center">
            <Container className="w-50 m-auto authWidth">
              <Row>
                <Col>
                  <h2 style={{color:"#A45EE9" ,fontWeight: "bold",marginTop: "-70px"}}>Update Password</h2>
                  <PasswordUpdate />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    )}
  </div>
);
};

export default EditPassword;

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";
import profile from "../../Images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/reducers/user/userSlice";

import UserProfile from "../../components/ProfileComponents/UserProfile";
import Loader from "../../components/SharedComponents/Loader";
import EnrolledCourses from "../../components/ProfileComponents/EnrolledCourses";

const EditProfile = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }

    if (isSuccess && message) {
      toast.success(message);
    }

    dispatch(getUserInfo());
  }, [isError, isSuccess, message]);
  // console.log(user);
  return (
<div style={{ paddingTop: "100px" }}>
  {isLoading ? (
    <Loader />
  ) : (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <Row className="w-100">
        {/* Image Section */}
        <Col md={5} className="d-none d-md-block">
          <img
            src={profile}
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
        <Container className="w-50 m-auto authWidth">
          <Row>
            <Col>
              <h1 style={{color:"#A45EE9" ,fontWeight: "bold",marginTop: "-70px" , textAlign: "center"}}>User Profile</h1>
              <UserProfile user={user} />
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  )}
</div>
);
};
        

export default EditProfile;

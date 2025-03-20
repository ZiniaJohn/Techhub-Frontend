import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import EnrolledCourses from "../../components/ProfileComponents/EnrolledCourses";
import Loader from "../../components/SharedComponents/Loader";

import { getAllEnrolledCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";

const UserEnrolledCourses = () => {
  const dispatch = useDispatch();
  const { isLoading, enrolledCourses } = useSelector(
    (state) => state.userSideCourses
  );

  useEffect(() => {
    dispatch(getAllEnrolledCourses());
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>

          <h1 className="text-center mb-5 hero-section-enrolled-course">Enrolled Courses</h1>
          <EnrolledCourses courses={enrolledCourses} />

        </Container>
      )}
    </div>
  );
};

export default UserEnrolledCourses;


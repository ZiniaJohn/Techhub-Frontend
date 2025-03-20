import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  deleteCourse,
  getInstCourses,
  reset,
} from "../../../redux/reducers/instructor/instructorSlice";
import Loader from "../../SharedComponents/Loader";
import InstCoursesTable from "./InstCoursesTable";
import toast from "react-hot-toast";

const InstCoursesMainPage = () => {
  const { isLoading, errorMessage, message, isError, courses } = useSelector(
    (state) => state.instructor
  );

  const dispatch = useDispatch();

  const deleteCourseHandler = (id) => {
    dispatch(deleteCourse(id));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(reset());
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }

    dispatch(getInstCourses());
  }, [message, isError, errorMessage, dispatch]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h3
        className="text-center"
        style={{
          color: "#ffffff",
          fontSize: "33",
          fontWeight: "bold",
          padding: "10px",
          background: "linear-gradient(135deg, #a87fe7, #66a3ff)",
          borderRadius: "10px",
          marginBottom: "20px",
          marginTop: "-10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          letterSpacing: "1px",
        }}
      >
        YOUR COURSES
      </h3>
          <InstCoursesTable courses={courses} onDelete={deleteCourseHandler} />
        </Container>
      )}
    </div>
  );
};

export default InstCoursesMainPage;

import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import InstructorOffCanvas from "../InstructorOffCanvas";
import {
  reset,
  updateCourse,
} from "../../../redux/reducers/instructor/instructorSlice";
import toast from "react-hot-toast";
import Loader from "../../SharedComponents/Loader";
import TextEditor from "../../SharedComponents/TextEditor";

const InstructorSectionEdit = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    file: "",
    preReq: "",
    courseFor: "This course is for beginners",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, errorMessage, message, isError } = useSelector(
    (state) => state.instructor
  );

  const { id } = useParams();

  const handleDrop = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => {
      return { ...prev, file: file };
    });
  };

  // change-Handler
  const inputChangeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    // formData.price = Number(formData.price);

    const courseData = new FormData();

    for (let key in formData) {
      courseData.append(key, formData[key]);
    }

    console.log(courseData);

    dispatch(updateCourse({ courseData, id }));
  };

  const descriptionHandler = (value) => {
    setFormData((prev) => {
      return { ...prev, description: value };
    });
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(reset());
      navigate("/instructor/courses");
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }
  }, [message, isError, errorMessage, navigate, dispatch]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className=" ">
          <Row>
            <Col md={2}>
              <InstructorOffCanvas />
            </Col>
            <Col md={10} className="  autoWidth p-5">
              <Form onSubmit={submitFormHandler} className="">
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
          marginTop: "-50px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          letterSpacing: "1px",
        }}
      >
        EDIT YOUR COURSE!
      </h3>
                <Form.Group controlId="title" className="mb-4">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Title of Course .."
                      onChange={inputChangeHandler}
                      style={{
                        borderRadius: "8px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                  </Form.Group>
                <Form.Group controlId="preReq" className="mb-4">
                <Form.Label>Course Prerequisite</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Prequisite of Course .."
                      onChange={inputChangeHandler}
                      style={{
                        borderRadius: "8px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                </Form.Group>
                <Form.Group
                    controlId="description"
                    className="mb-3"
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  >
                    <Form.Label>Description</Form.Label>
                    <TextEditor descriptionHandler={descriptionHandler} />
                  </Form.Group>

                <Form.Group controlId="file" className="mb-4">
                  <Form.Label>Thumbnail</Form.Label>

                  <Form.Control
                    type="file"
                    name="file"
                    onChange={handleDrop}
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}

                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="Price" className="mb-4">
                <Form.Label>Course Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Price of Course .."
                      onChange={inputChangeHandler}
                      style={{
                        borderRadius: "8px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    aria-label="Default select example"
                    onChange={inputChangeHandler}
                    style={{
                      borderRadius: "8px",
                      padding: "10px",
                      border: "1px solid #ccc",
                      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  >
                    <option>Open this select menu</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="IT & Software">IT & Software</option>
                    <option value="Business">Business</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Music">Music</option>
                  </Form.Select>
                  
                </Form.Group>

                <Button
                    variant="primary"
                    className="w-100"
                    type="submit"
                    style={{ backgroundColor: "#007BFF", borderColor: "#007BFF" ,borderRadius: "10px" }}
                  >
                    Edit
                  </Button>
              </Form>
           
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default InstructorSectionEdit;

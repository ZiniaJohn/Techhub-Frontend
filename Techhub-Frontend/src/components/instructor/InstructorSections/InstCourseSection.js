

import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import {
  createSection,
  editSection,
  getSections,
  deleteSection,
  reset,
} from "../../../redux/reducers/courseSections/courseSectionsSlice";

import InstCourseSectionTable from "./InstCourseSectionTable";
import Loader from "../../SharedComponents/Loader";

const InstCourseSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);
  const [sectionId, setSectionId] = useState("");

  const {
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    successMessage,
    sections,
  } = useSelector((state) => state.courseSections);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("Title is Required!");
    }

    dispatch(createSection({ title, courseId: id }));
  };

  const editTitleHanlder = (id, title) => {
    setTitle(title);
    setEdit(true);
    setSectionId(id);
  };

  const sectionDeleteHandler = (id) => {
    setSectionId(id);
  };

  const submitEditHandler = (event) => {
    event.preventDefault();
    dispatch(editSection({ title, courseId: id, sectionId: sectionId }));
    setTitle("");
    setEdit(false);
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
      dispatch(reset());
    }
    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }
    dispatch(getSections({ courseId: id }));
  }, [isSuccess, successMessage, isError, errorMessage, dispatch]);

  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
      
        <Form
          onSubmit={(event) =>
            !edit ? submitHandler(event) : submitEditHandler(event)
          }
        >
          <h3
            className="text-center"
            style={{
              color: "#ffffff",
              fontSize: "33px",
              fontWeight: "bold",
              padding: "10px",
              background: "linear-gradient(135deg, #a87fe7, #66a3ff)",
              borderRadius: "10px",
              marginBottom: "20px",
              marginTop: "-7px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              letterSpacing: "1px",
            }}
          >{!edit ? "ADD SECTION" : "EDIT SECTION"}
            
          </h3>
          <Form.Group className="mt-3" controlId="title">
            <Form.Label>Title of Your Section</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                name="title"
                placeholder="Title here.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
              <Button
                variant="primary"
                className="ms-2"
                type="submit"
                style={{
                  backgroundColor: "#007BFF",
                  borderColor: "#007BFF",
                  borderRadius: "10px",
                }}
              >
                {edit ? "UPDATE" : "ADD"}
              </Button>
            </div>
          </Form.Group>
        </Form>

        <div className="my-5">
          {isLoading ? (
            <Loader />
          ) : (
            <InstCourseSectionTable
              sections={sections}
              courseId={id}
              editSection={editTitleHanlder}
              deleteSection={sectionDeleteHandler}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default InstCourseSection;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import {
  useSearchParams,
  Link,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";
import Loader from "../../components/SharedComponents/Loader";
import Rating from "../../components/SharedComponents/Rating";
import SearchByFilter from "./SearchByFilter";
import PaginationComponent from "./PaginationComponent";

const SearchedCourses = () => {
  const [searchParams] = useSearchParams();

  let keyword = searchParams.get("keyword");
  let averageRating = searchParams.get("averageRating");
  let category = searchParams.get("category");
  let price = searchParams.get("price");
  let page = searchParams.get("page");

  const dispatch = useDispatch();
  const { isLoading, courses, totalCourses } = useSelector(
    (state) => state.userSideCourses
  );

  const navigate = useNavigate();

  let parameters = {
    keyword,
    averageRating,
    price,
    category,
    page,
  };

  const setRatingParam = (value) => {
    parameters.averageRating = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const setCategoryParam = (value) => {
    parameters.category = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const setPriceParam = (value) => {
    parameters.price = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const setPageParam = (value) => {
    parameters.page = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const clearAllFilters = () => {
    parameters.keyword = keyword;
    parameters.category = "";
    parameters.page = page;
    parameters.averageRating = 0;
    parameters.price = 10;

    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  useEffect(() => {
    dispatch(getAllCourses(parameters));
  }, [keyword, averageRating, category, price, page]);

  return (
    <div className="py-5 d-flex align-items-center" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded shadow-sm mt-5">
              <h5 className="text-primary fw-bold">You Searched: <span className="text-dark">{keyword}</span></h5>
              <div>
                <p className="mb-0"><strong>Total Available Courses:</strong> {totalCourses}</p>
                <p className="mb-0"><strong>Matching Results:</strong> {courses.length}</p>
              </div>
            </div>

            <Row className="mt-5">
              <Col md={3}>
                <div className="p-3 bg-white rounded shadow-sm">
                  
                  <SearchByFilter
                    setRatingParam={setRatingParam}
                    setPriceParam={setPriceParam}
                    setCategoryParam={setCategoryParam}
                    averageRating={averageRating}
                    category={category}
                    price={price}
                  />
                  <Button
                    onClick={clearAllFilters}
                    variant="danger"
                    className="mt-3 w-100 rounded"
                  >
                    Clear Filters
                  </Button>
                </div>
              </Col>

              <Col md={9}>
                {courses.length === 0 ? (
                  <div className="text-center mt-5">
                    <h4 className="text-muted"> No Courses Found</h4>
                  </div>
                ) : (
                  <Row>
                    {courses.map((course) => (
                      <Col md={6} lg={4} key={course._id}>
                        <Link to={`/courseDetail/${course._id}`} className="text-decoration-none">
                          <Card className="mt-3 shadow-sm border-0 rounded overflow-hidden">
                            <Card.Img
                              variant="top"
                              src={course.poster.url}
                              className="img-fluid"
                              style={{ height: "180px", objectFit: "cover" }}
                            />
                            <Card.Body className="p-3">
                              <Card.Title className="text-dark fw-bold">
                                {course.title}
                              </Card.Title>
                              <p className="text-muted mb-1">Category: {course.category}</p>
                              <p className="text-muted mb-1">👨‍🏫 Created by: {course.instructor.name}</p>
                              <Rating value={course.averageRating} text={` ${course.numOfReviews} reviews`} />
                              <p className="fw-semibold text-success mb-1">📚 {course.sections.reduce((acc, section) => acc + section.lectures.length, 0)} Lectures</p>
                              <h5 className="text-primary fw-bold">💲{course.price}</h5>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                )}

                {totalCourses > 6 && (
                  <div className="mt-4">
                    <PaginationComponent courses={totalCourses} page={page} setPageParam={setPageParam} />
                  </div>
                )}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );

  
};

export default SearchedCourses;

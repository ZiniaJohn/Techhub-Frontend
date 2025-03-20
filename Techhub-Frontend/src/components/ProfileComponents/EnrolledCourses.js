import React from "react";
import { Col, Row, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../SharedComponents/Rating";

const EnrolledCourses = ({ courses }) => {
  return (
    <div>
      {courses.length === 0 && <Alert variant="danger" className="alert-no-course-cart">
        You are not enrolled in any course.</Alert>}

      <Row>
        {courses.map((course) => (
          <Col md={4} key={course._id}>
            <Card className="course-card">
              <Card.Img variant="top" src={course.poster.url} />
              <Card.Body>
                <h4>{course.title}</h4>
                <Rating
                  value={course.averageRating}
                  text={`${course.numOfReviews} reviews`}
                />
                <Link to={`/user-enrolledCourses/${course._id}`}>
                  <Button className="mt-2 enrolled-course-start-button">
                    Start
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EnrolledCourses;

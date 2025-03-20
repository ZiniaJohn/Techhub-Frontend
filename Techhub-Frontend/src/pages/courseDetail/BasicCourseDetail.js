import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LiaChartBarSolid } from "react-icons/lia";
import {
  MdAccessTimeFilled,
  MdCloudDownload,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import toast from "react-hot-toast";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart/cartSlice";

import Rating from "../../components/SharedComponents/Rating";

const API_URL = process.env.REACT_APP_API_URL;

const BasicCourseDetail = ({ course }) => {
  const { user } = useSelector((state) => state.auth);

  const { user: userInfo } = useSelector((state) => state.user);

  const { isLoading, successMessage, isSuccess, isError, errorMessage } =
    useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (!user) {
      return navigate("/Login");
    }

    dispatch(addToCart(course._id));
  };

  

  // side effects
  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
      navigate("/cart");
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
    }
  }, [isSuccess, successMessage, isError, errorMessage]);

  return (
    <div
    className="text-white"
    style={{
      background: "linear-gradient(135deg, #a87fe7, #66a3ff)",
      padding: "50px",
      height: "300px",
      color: "#fce7f3", // Light pinkish-white for contrast
      borderRadius: "10px",
      fontFamily: "Arial, sans-serif", // Modern font styling
    }}
  >
  
      <Container>
        <Row>
          <Col md={8} className="">
            <h1 className="text-white mb-2">{course.title}</h1>
            <div className="headline mb-3 ">
              The most advanced and modern course on the internet: master
              required skills, and so much more.
            </div>
            <div className="d-flex mb-2">
              <p className="fw-bold me-2">{course.averageRating}</p>
              <Rating
                value={course.averageRating}
                text={` of ${course.numOfReviews} reviews`}
              />
            </div>
            <div>
              <p>Created By : {course.instructor.name}</p>
            </div>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={course.poster.url} />
              <Card.Body className="p-4">
                <h1>Course Overview</h1>
                <p className="lead">
                  <LiaChartBarSolid size={30} /> Beginner to Pro
                </p>
                <p className="lead">
                  <MdOutlineOndemandVideo size={30} />{" "}
                  {course.sections.reduce(
                    (acc, sec) => acc + sec.lectures.length,
                    0
                  )}{" "}
                  Lessons
                </p>
                <p className="lead">
                  <MdCloudDownload size={30} /> Downloadable-content
                </p>
                <p className="lead">
                  <HiOutlineNewspaper size={30} /> Hands on Exercises
                </p>
                <p className="lead">
                  <MdAccessTimeFilled size={30} /> Learn at your own pace
                </p>
                <h3>Price: ${course.price}</h3>

                {user && user._id === course.instructor._id ? (
                  <>
                    <h5>
                      Note: You are the creator of this course you can't buy.
                    </h5>
                  </>
                ) : userInfo &&
                  userInfo.enrolledCourses.find(
                    (c) => c.toString() === course._id.toString()
                  ) ? (
                  <h5>You are already enrolled in this course.</h5>
                ) : (
                  <>
                   <Button
  className="w-100"
  style={{
    marginBottom: "3px",
    background: "linear-gradient(135deg, #a87fe7, #66a3ff)",
    border: "none",
    borderRadius: "8px",
    color: "white",
  }}
  onClick={addToCartHandler}
>
  Add to Cart
</Button>
                   
                  </>
                )}
                <span>30 days-money back gurantee</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasicCourseDetail;

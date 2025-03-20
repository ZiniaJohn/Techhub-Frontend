
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCartItems,
  reset,
  removeFromCart,
} from "../../redux/reducers/cart/cartSlice";
import Rating from "../../components/SharedComponents/Rating";
import Loader from "../../components/SharedComponents/Loader";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const API_URL = process.env.REACT_APP_API_URL;

const Cart = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const { isLoading, cartItems, isSuccess, successMessage } = useSelector(
    (state) => state.cart
  );
  console.log(cartItems);
  const { user } = useSelector((state) => state.auth);

  const [isCardReady, setIsCardReady] = useState(false);

  const totalPayment = cartItems.reduce(
    (acc, course) => acc + (course?.price || 0),
    0
  );

  const courseIdString =
    cartItems.length === 1
      ? cartItems[0]?._id
      : cartItems
        .filter((course) => course?._id)
        .map((course) => course._id)
        .join(",");

  const paymentHandler = async () => {
    try {
      if (!stripe || !elements) {
        toast.error("Payment service is not initialized. Please try again.");
        return;
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        toast.error("Card details are not loaded. Please try again.");
        return;
      }

      const {
        data: { clientSecret },
      } = await axios.post(`${API_URL}/api/v1/payment`, {
        amount: totalPayment,
      });
      console.log("check0");
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });
      console.log("check0");
      if (result.error) {
        console.log("checke");
        toast.error(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        console.log("checkt");
        const route =
          cartItems.length === 1
            ? "paymentVerification"
            : "multipleVerification";
        const res = await axios.post(`${API_URL}/api/v1/payment/${route}`, {
          paymentIntentId: result.paymentIntent.id,
          courseId: courseIdString,
          userId: user._id,
        });
        console.log(res.data.id.id);
        navigate(`/paymentsuccess?reference=${res.data.id.id}`);
        console.log("checkdispacth");
        dispatch(reset());
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment failed.");
    }
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
    }
    dispatch(getCartItems());
    return () => {
      dispatch(reset());
    };
  }, [successMessage, dispatch]);


  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h2 className="Cart-heading">Your Cart</h2>
          <h6 className="cart-total-course">Total Courses : {cartItems.length}</h6>
          <Row>
            <Col md={8}>
              {cartItems.length === 0 && (
                <Alert variant="danger" className="alert-no-course-cart">No Items in the Cart.</Alert>
              )}
              {cartItems.map(
                (item) =>
                  item &&
                  item.price !== undefined && (
                    <Card
                      className="d-flex flex-row align-items-center mt-3 p-3 shadow-sm  cousre-container"
                      style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: "1px solid #ddd",
                      }}
                      key={item._id}
                    >
                      <Card.Img
                        variant="top"
                        src={item.poster?.url}
                        className="img-fluid"
                        style={{
                          objectFit: "cover",
                          width: "100px",
                          height: "100px",
                          borderRadius: "8px",
                          marginRight: "15px",
                        }}
                      />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <Card.Title className="mb-1">{item.title}</Card.Title>
                          <p className="text-muted small">Created By: {item.instructor?.name}</p>
                          <Rating value={item.averageRating} text={`${item.numOfReviews} reviews`} />
                          <p className="fw-bold mt-1">Price: ${item.price}</p>
                        </div>
                      </Card.Body>
                      <Button
                        onClick={() => dispatch(removeFromCart(item._id))}
                        size="sm"
                        variant="outline-danger"
                        className="align-self-start course-remove-btn-cart"
                      >
                        Remove
                      </Button>
                    </Card>
                  )
              )}
            </Col>

            <Col md={4} className="order-first order-md-last glass-effect d-flex flex-column payment-container">
              <h2 className="glass-title">💳 Payment</h2>
              <p className="font-weight-900 glass-text">Total Price: </p>
              <h3 className="glass-price">${totalPayment.toFixed(2)}</h3>
              <CardElement className="mb-3 glass-input" onReady={() => setIsCardReady(true)} />
              <Button
                variant="success"
                className="w-100 glass-btn mt-auto"
                onClick={paymentHandler}
                disabled={!stripe || !elements || !isCardReady}
              >
                ✅ PAY NOW
              </Button>
            </Col>


          </Row>
        </Container>
      )}
    </div>
  );

};

export default Cart; 
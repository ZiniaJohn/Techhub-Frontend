import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../SharedComponents/Rating";

const DisplayCardView = ({ cardData, children }) => {
  // Fallback to an empty array if cardData is undefined/null
  const cards = Array.isArray(cardData) ? cardData.slice(0, 6) : [];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">{children}</h2>
      <Row className="justify-content-center g-4">
        {cards.map((card) => (
          <Col key={card._id} md={4} sm={6} xs={12} className="d-flex justify-content-center">
            <Card
              style={{
                width: "400px",
                height: "400px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
                transition: "transform 0.2s ease-in-out",
                display: "flex",
                flexDirection: "column",
              }}
              className="card-hover"
            >
              <Card.Img
                src={card.poster && card.poster.url}
                variant="top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <div className="flex-grow-1">
                  <Card.Title className="fw-bold text-dark text-truncate">{card.title}</Card.Title>
                  <Card.Text className="fw-bold text-primary mb-1">
                    Price: ${card.price}
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <p className="fw-bold mb-0 me-2">{card.averageRating}</p>
                    <Rating value={card.averageRating} text={`(${card.numOfReviews} reviews)`} />
                  </div>
                </div>
                <Link to={`/courseDetail/${card._id}`}>
                  <Button
                    variant="primary"
                    className="text-uppercase w-100 mt-2"
                    style={{
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                      fontWeight: "bold",
                    }}
                  >
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DisplayCardView;

import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:bitf21m531@pucit.edu.pk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Contact Us</h1>
        <p>TechHub is ready to provide the right solution according to your needs.</p>
      </div>

      <Container className="contact-container">
        <Row>
          {/* Left Section - Contact Info */}
          <Col md={5} className="contact-info">
            <h3>Get in touch</h3>
            <p>We're here to support your learning journey and answer your queries.</p>

            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <div>
                <h5>PUCIT</h5>
                <p>F7J8+53W, Samsani Road, Quaid-i-Azam Campus, Lahore</p>
              </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div>
                <h5>Email Us</h5>
                <p>bitf21m550@pucit.edu.pk</p>
              </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <div>
                <h5>Call Us</h5>
                <p>Phone: +6221.2002.2012</p>
              </div>
            </div>
          </Col>

          {/* Right Section - Contact Form */}
          <Col md={7} className="contact-form">
            <h3>Send us a message</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="pt-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="pt-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="pt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;

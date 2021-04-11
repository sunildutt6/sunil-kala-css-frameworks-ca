import React from "react";
import ContentForm from "../ContentForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContentInfo from "../ContentInfo";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container>
      <h1 className = "my-5">Submit your details</h1>
      <Row>
        <Col md className="d-flex order-md-2">
          <ContentInfo />
        </Col>
        <Col md className="order-md-1 mr-3">
          <ContentForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

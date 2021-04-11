import React from "react";
import Container from "react-bootstrap/Container";
import ContentNews from "../ContentNews";
import NumberPage from "../NumberPage";

function News() {
  return (
    <Container>
      <h1>News</h1>
      <NumberPage />
      <ContentNews />
      <NumberPage />
    </Container>
  );
}

export default News;

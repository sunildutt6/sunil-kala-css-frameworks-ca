import React from "react";
import Carousel from "react-bootstrap/carousel";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import ContentTabs from "../ContentTabs";
import HomeCarousel from "../HomeCarousel";
import TextContent from "../TextContent";
import Container from "react-bootstrap/Container";
import ContentAccordion from "../ContentAccordion";

function Home() {
  return (
    <>
      <HomeCarousel />
      <Container>
        <TextContent />
        <ContentAccordion />
      <ContentTabs />
      </Container>
    </>
  );
}

export default Home;

import React from 'react';
import Carousel from "react-bootstrap/carousel";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function HomeCarousel() {
    return (
        <Carousel controls= {false} fade >
      <Carousel.Item>
        <ResponsiveEmbed aspectRatio="21by9">
          <embed src="../images/Carousel images/carousel-3.jpg" />
        </ResponsiveEmbed>
              </Carousel.Item>
      <Carousel.Item>
      <ResponsiveEmbed aspectRatio="21by9">
          <embed src="../images/Carousel images/carousel-1.jpg" />
        </ResponsiveEmbed>
      </Carousel.Item>
      <Carousel.Item>
      <ResponsiveEmbed aspectRatio="21by9">
          <embed src="../images/Carousel images/carousel-2.jpg" />
        </ResponsiveEmbed>
      </Carousel.Item>
    </Carousel>
    )
}

export default HomeCarousel

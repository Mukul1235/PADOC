import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css"

const CarouselPage = () => {
  return (
    <div>
      <Carousel
        className="Carousel"
        variant="dark"
        controls={true}
        fade={true}
        interval={5500}
      >
        <Carousel.Item>
          <video
            className="pages"
            src="assets/padoc1.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          />
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="pages"
            src="assets/padoc1.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          />
        </Carousel.Item>
        <Carousel.Item axis="horizontal">
          <video
            className="pages"
            src="assets/padoc1.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage

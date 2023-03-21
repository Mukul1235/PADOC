import React from "react";
import CarouselHome from "./Carousel";
import DoctorInfo from "./Facilites";
import Faculty from "./Faculty";
import Layout from "../Layout";

const Home = () => {
  return (
    <>
      <Layout/>
      <div className="carousel-cont">
        <CarouselHome />
      </div>
      <div>
        <DoctorInfo />
      </div>
      <div>
        <Faculty />
      </div>
    </>
  );
};

export default Home;

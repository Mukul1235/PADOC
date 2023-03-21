import React from "react";
import "./patient.css";
import Layout from "../Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUserDoctor,
  faKitMedical,
  faHospital,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import CarouselPage from "./Carousel.js"
const patient = () => {
  return (
    <>
      <Layout />
      <div className="sidebar">
        <Link to="/">
          <div className="home_bar">
            <img srcSet="logo.png"></img>Padoc
          </div>
        </Link>
        <Link to="/exe">
          <div className="op_exer">
            <span>
              <FontAwesomeIcon icon={faDumbbell} />
            </span>
            Exercise
          </div>
        </Link>
        <Link to="/med">
          <div className="op_med">
            <span>
              <FontAwesomeIcon icon={faKitMedical} />
            </span>
            Medicines
          </div>
        </Link>
        <Link to="/docsi">
          <div className="op_doc">
            <span>
              <FontAwesomeIcon icon={faUserDoctor} />
            </span>
            SearchDoc
          </div>
        </Link>
        <Link to="/hospi">
          <div className="op_hospitals">
            <span>
              <FontAwesomeIcon icon={faHospital} />
            </span>
            Hospitals
          </div>
        </Link>
        <Link to="/chat">
          <div className="op_hospitals">
            <span>
              <FontAwesomeIcon icon={faHospital} />
            </span>
            chat
          </div>
        </Link>

        <div className="logout">
          Logout
          <span>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default patient;

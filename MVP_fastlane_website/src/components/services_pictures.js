import React from "react";
import AI from "../img/ai-large.jpg";
import MobileDev from "../img/mobileDev-large.jpg";
import WebDev from "../img/webDev-large.jpg";

const ServicesPictures = () => (
  <div className="services">
    <img
      src={MobileDev}
      alt="Mobile Development"
      className="services__photo services__photo--p1"
    />

    <img
      src={WebDev}
      alt="Web devlopment"
      className="services__photo services__photo--p2"
    />
    <img
      src={AI}
      alt="Machine Learning and AI"
      className="services__photo services__photo--p3"
    />
  </div>
);

export default ServicesPictures;

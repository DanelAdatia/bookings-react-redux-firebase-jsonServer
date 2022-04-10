import React from "react";
import HotelDetails from "../Components/Hotels/HotelDetails";
import Layout from "../SharedComponents/Layout";
import hongKong from "../assets/images/hongKong.jpeg";
import "../assets/css/Homepage.css";
import paris from "../assets/images/paris.jpg";
import paris2 from "../assets/images/paris2.jpg";
import london from "../assets/images/london.jpg";
import tokyo from "../assets/images/tokyo.jpg";

const Homepage = () => {
  return (
    <Layout>
      <HotelDetails />
      <div className="homepage-images">
        <img className="hong-kong" src={hongKong} alt="hongKong" />
        <img className="paris-image" src={paris} alt="Paris" />
        <img className="paris2-image" src={paris2} alt="Paris" />
        <img className="london-image" src={london} alt="London" />
        <img className="london-image" src={tokyo} alt="Tokyo" />
      </div>
    </Layout>
  );
};

export default Homepage;

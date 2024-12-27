import React from "react";
import "../styles/Layout.css";
import { Button, Typography } from "@mui/material";
import bannerImage from "../img/map.png"
import footerImage from "../img/footerImage.png"

const buttons = [
  {
    title: "Small Actions Change Lives Empowering Payatas Youth",
    description:
      "The Philippines premier social impact platform designed to elavate your charity effortlessly.",
  },

];

const Home = () => {

  return (
    <div className="home-container">
      <div className="button-row">
        <div className="main-button">
          <Typography variant="h3">
            {buttons[0].title}
          </Typography>
          <Typography variant="body1" >
            {buttons[0].description}
          </Typography>
        </div>
      </div>
     
        <h2 className="map">Payatas Rift</h2>
      <img src={bannerImage} alt="Banner" className="banner-image" />
  <div className="footerimage">
      <img src={footerImage} alt="Banner" className="footer-image" />
      <div className="footertext">
      <h2 className="footerbanner">Much in Little</h2>
      <h3 className="h3-footerbanner">Every donation, no matter the size, helps change lives. Join us in making a
      difference, one step at a time.</h3>
      <h3 className="h3-donatebutton">Donate Now</h3>
      </div>
      </div>
    </div>
  );
};

export default Home;

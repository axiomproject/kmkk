import React from "react";
import "../styles/Layout.css";
import { Button, Typography } from "@mui/material";


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
      <div className="home-container">

      </div>
    </div>
  );
};

export default Home;

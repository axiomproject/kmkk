import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import lifeImage from "../img/life.png"





const Life = () => {


  return (
    <div className="home-container" >
<img src={lifeImage} alt="Banner" className="life-image" />
<p className="lifetext">Welcome to the heart of KM Foundation, where every individual – staff, sponsored students, and sponsors – plays a vital role in crafting a narrative of hope, growth, and lasting impact. Here’s a glimpse into the unique experiences that define Life with KM Foundation</p>
    </div>
  );
};

export default Life;

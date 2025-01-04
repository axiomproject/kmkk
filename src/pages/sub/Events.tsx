import React, { useState } from "react";
import { Collapse, ButtonBase } from "@mui/material";
import "../../styles/Layout.css";
import bannerImage from "../../img/coverphoto2.png"



const Events = () => {
  

 

    

  return (
    <div className="home-container">
 <img src={bannerImage} alt="Banner" className="banner-image" />


 <div className="events-container">
 <h1 className="Events">Events</h1>
 <div className="events-card">
    
 </div>
 </div>
  
    </div>
  );
};

export default Events;

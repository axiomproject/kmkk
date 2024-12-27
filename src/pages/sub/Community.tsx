import React, { useState } from "react";
import { Collapse, ButtonBase } from "@mui/material";
import "../../styles/Layout.css";
import bannerImage from "../../img/coverphoto1.png"



const Community = () => {
  

 

    

  return (
    <div className="home-container">
 <img src={bannerImage} alt="Banner" className="banner-image" />
 <div className="introduction">
 <h1 className="Testimonial">Our Community</h1>
 <h4 className="h4-testimonial">The KM Foundation’s community initiatives aim to empower and support Payatas residents through programs in health, education, and livelihood, fostering resilience and growth within one of the most underserved areas.</h4>
 </div>
 <div className="home-container">

      </div>
    </div>
  );
};

export default Community;

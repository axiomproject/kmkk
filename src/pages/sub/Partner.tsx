import React, { useState } from "react";
import { Collapse, ButtonBase } from "@mui/material";
import "../../styles/Layout.css";
import bannerImage from '../../img/partner.png';
import storyImage from '../../img/org1.png'; 
import orgImage from '../../img/org2.png'; 




const Partner = () => {
  

 

    

  return (
    <div className="home-container">
     <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2 className="ph">Philippines Humanitarian</h2>
            <p>
            In 2001, Amelia Hernandez founded the KapatidKita MahalKita Foundation (KKMK Foundation) in the Philippines to educate impoverished Filipino children and help them break the cycle of poverty. She and her husband Diosdado gathered school supplies and enlisted sponsors to support these students. In 2012, Amelia's daughter, Imelda "Erni" Armstrong, expanded this mission by establishing Philippines Humanitarian (PH), a 501(c)(3) nonprofit in Salt Lake City, Utah, to increase donor support and develop additional programs for children in Payatas, a village originally built on the Philippines' largest open dumpsite. After Amelia’s passing in 2014, PH continued her work, with Erni Armstrong as Chairman of the Board, Cori Sutherland as Executive Director, and Eva Aquino as Program Director in the Philippines. Today, PH’s Student Sponsorship Program supports over 250 students, offers college scholarships, and funds a feeding program. The foundation’s philosophy of fostering familial bonds with those in need has contributed to impactful, generational change, evidenced by college graduates who now provide stability and resources for their families.
            </p>
          </div>
          <div className="story-image-container">
               <img src={storyImage} alt="Fr. Walter L. Ysaac, S.J." className="story-image" />
         
          </div>
        </div>
      </div>
      <div className="story-section">
        <div className="story-content reverse-layout">
          <div className="story-image-container">
            <img src={orgImage} alt="Another Related Image" className="organization-image" />
           
          </div>
          <div className="story-text">
            <p>
            Reed Elsevier Philippines actively supports KM Payatas by sponsoring programs that provide essential resources, educational support, and skill-building opportunities to underprivileged youth. Through their commitment to KM Payatas’ mission, Reed Elsevier enables students to access quality education, receive vital mentorship, and gain skills necessary for personal and professional growth. Their partnership strengthens the foundation’s impact on transforming young lives, fostering self-confidence, and empowering students to break the cycle of poverty.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Partner;

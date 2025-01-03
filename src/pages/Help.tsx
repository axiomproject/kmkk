import React from "react";
import "../styles/Layout.css";
import bannerImage from "../img/coverphoto.png"
import donatepicture from "../img/donatepicture.png"
import partnerwithus from '../img/partnerwithus.svg';


const Help = () => {
 

  return (
    <div className="home-container">
   <img src={bannerImage} alt="Banner" className="banner-image" />
   <div className="page-container">
    <div className="donate-container">
      <div className="donate-text">
        <h1>Donate</h1>
        <p>By making a donation to KM Foundation, you can support our various programs and initiatives aimed at uplifting underprivileged communities. Whether you choose to make a one-time donation, a regular contribution, or an in-kind donation, your generosity will make a meaningful difference in the lives of those in need.</p>
        <ul>
        <li><b>One-time Donation:</b>
            <ul>
                <li>Housing Assistance/Repair</li>
                <li>Recreational Activities of Children (Educational Tour)</li>
                <li>General/Administrative Fund of the Foundation</li>
            </ul>
        </li>
        <li><b>Regular Donation:</b>
            <ul>
                <li>Feeding Programs</li>
            </ul>
        </li>
        <li>,<b>In-kind Donation:</b>
          <ul>
          <li className="contribute">Contribute by donating essential items such as food, clothing, medicines, and more. Your thoughtful donations can make a meaningful impact on the lives of those in need.</li>
          </ul>
        </li>

    </ul>
      </div>
      <div className="donate-picture">
        <img src={donatepicture}></img>
      </div>
    </div>
    <div className="partner-section">
        <div className="partner-content">
          <h1>Partner with Us</h1>
          <p>
            We welcome collaborations with organizations, corporations, and individuals who share our vision of empowering underprivileged communities through education and support.
          </p>
          <p>
            We offer flexible partnership options tailored to suit your specific goals and preferences. Whether you’re looking to sponsor a student, organize a fundraising event, or initiate a corporate giving program, we’re here to work with you every step of the way.
          </p>
          <p>
            Together, we can create positive change and build a brighter future for those in need. Partner with us today and be a part of something truly impactful.
          </p>
        </div>
        <img src={partnerwithus} alt="Partner with Us" className="partner-icon" />
      </div>
   </div>
    </div>
  );
};

export default Help;

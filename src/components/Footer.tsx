import React from "react";
import "../styles/Footer.css";
import footerImage from "../img/footerImage.png"

export default function Footer() {
  return (
    <footer>
       <div className="footerimage">
      <img src={footerImage} alt="Banner" className="footer-image" />
      <div className="footertext">
      <h2 className="footerbanner">Much in Little</h2>
      <h3 className="h3-footerbanner">Every donation, no matter the size, helps change lives. Join us in making a
      difference, one step at a time.</h3>
      <button className="h3-donatebutton">Donate Now</button>
      </div>
      </div>
  
      <div className="footer-div">
        <div className="footer-divider">
          <div className="help">
        <h1 className="footercreds">Need Help?</h1>
        <h5 className="h5-footercreds">If you have further questions or need any assistance, please get in touch with our
        team and we will gladly assist you.</h5>
        <h5 className="h5-contact">Contact Us</h5>
        </div>
        <div className="touch">
        <h1 className="footercreds">Stay in touch</h1>
        <h5 className="h5-footercreds">Subscribe to our news letter to receive news, updates and hear about incredible
        stories from recipients.</h5>
        </div>
        </div>
        <div className="main-footer-second">
        <div className="footer-second">
          <h1>Donors</h1>
          <h1>Non-Profits</h1>
          <h1>Companies</h1>
          <h1>About Us</h1>
          <h1>Support</h1>
          <h1>Social Media</h1>
        </div>
        </div>
      </div>
    </footer>
  );
}

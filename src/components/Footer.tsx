import React from "react";
import "../styles/Footer.css";
import footerImage from "../img/footerImage.png"
import footerImage2 from "../img/footerbg2.svg"

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
        <button className="h3-contactus">Contact Us</button>
        </div>
        <div className="touch">
        <h1 className="footercreds">Stay in touch</h1>
        <h5 className="h5-footercreds">Subscribe to our news letter to receive news, updates and hear about incredible
        stories from recipients.</h5>
        </div>
        </div>
        <div className="footer-container">
        <div className="footer-column">
          <h4>Donors</h4>
          <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Non Profits</h4>
          <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Companies</h4>
          <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}

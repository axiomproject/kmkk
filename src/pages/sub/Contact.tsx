import { useState } from "react";
import React from 'react'
import locationImage from '../../img/map.svg';

const Contact: React.FC = () => {
    const [message, setMessage] = useState("");
    const [charCount, setCharCount] = useState(0);
  
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setMessage(value);
      setCharCount(value.length);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert("Form submitted!");
    };

  return (
<div className="page-container">
    <div className='firstSection'>
        <div className='Contact'>
            <div className='ContactUs'>
                <h1 className="contact">Contact Us</h1>
                <p className="contactp">If you have further questions or need any assistance, please get in touch with our
                team and we will gladly assist you.</p>
                <p className="contactp">Kmkkpayatas@gmail.com</p>
                <p className="contactp">321-221-221</p>
                <a className="contactc" href="facebook.com" target="facebook.com">Contact Support</a>
            </div>
            <div className='inquiry'>
              <div className="supp">
                <h4 className="inq">Contact Support</h4>
                <p className="inqp">Provides exceptional customer assistance through chat, resolving inquiries, and addressing concerns.</p>
                </div>
                <div className="feedback">
                  <h4 className="inq">Feedback and Suggestions</h4>
                  <p className="inqp">Collects, analyzes, and addresses user feedback and suggestions to improve products, services, and overall customer satisfaction effectively.</p>
                </div>
                <div className="inquiries">
                  <h4 className="inq">Made Inquiries</h4>
                  <p className="inqp">Handles and responds to inquiries efficiently, providing accurate information and solutions to ensure customer satisfaction and clarity.</p>
                </div>
                <div className="form-container">
                <div className="contact-form">
                  <h2>Get in Touch</h2>
                  <p>You can reach us anytime</p>
                  <form onSubmit={handleSubmit}>
                <div className="name-group">
                  <input type="text" name="firstName" placeholder="First name" required />
                  <input type="text" name="lastName" placeholder="Last name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your email" required />
                </div>
                <div className="phone-group">
                <select name="countryCode">
                <option value="+63">+63</option>
            </select>
                  <input type="tel" name="phone" placeholder="Phone number" required />
            </div>
            <div className="form-group">
            <textarea
            name="message"
            placeholder="How can we help?"
            maxLength={120}
            value={message}
            onChange={handleMessageChange}
            required
          />
          <div className="char-count">{charCount}/120</div>
        </div>
        <button type="submit" className="contact-submit-button">Submit</button>
        <p className="terms">
          By contacting us, you agree to our <a href="#">Terms of service</a> and{" "}
          <a href="#">Privacy</a>.
        </p>
      </form>
    </div>
    </div>
        </div>
        <div>
        <div className="secondSection">
        <div className='location'>
        <img src={locationImage} alt="location" className="location-image" />
            <div className='locationtext'>
                <h6>Our location</h6>
                <h1>Connecting Near and Far</h1>
                <h3>Headquarters</h3>
                <p className="contactp">Kapatid kita mahal kita Foundation</p>
                <p className="contactp">Quezon City, Philippines</p>
                <p className="contactp">Lonergan Center, Ateneo de Manila University, PH 1108</p>
                <p className="contactp">Philippines</p>
            </div>
            </div>
          </div>
</div>
        </div>

    </div>
      </div>


  )
}

export default Contact

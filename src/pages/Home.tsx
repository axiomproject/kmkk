import React from "react";
import "../styles/Layout.css";
import { Button, Typography } from "@mui/material";
import bannerImage from "../img/map.png"
import footerImage from "../img/footerImage.png"
import happinessIcon from '../img/happiness.svg';
import loveIcon from '../img/love.svg';
import sociallyIcon from '../img/social.svg';
import gradStory from '../img/gradstory.svg'
import weDo from "../img/wedo.svg";
import help from "../img/help.svg";
import highlightBg from "../img/highlightBg.svg"
import PathConstants from "../routes/pathConstants";



interface HighlightCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const buttons = [
  {
    title: "Small Actions Change Lives Empowering Payatas Youth",
    description:
      "The Philippines premier social impact platform designed to elavate your charity effortlessly.",
  },

];

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="highlight-card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} className="card-link">
        Read more
      </a>
    </div>
  );
};

const Home = () => {

  return (
    <div className="page-container">
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
      <div className="fund-container">
      <div className="fundraising-section">
      <h2>
        Fundraising with <span className="highlight">Kapatid kita, Mahal kita</span> only takes a few minutes
      </h2>
      <div className="cards-container">
        <div className="cards">
          <img src={happinessIcon} alt="Give Happiness Icon" className="icon" />
          <h3>Give Happiness</h3>
          <p>Giving happiness to others is one of the most fulfilling things you can do in life</p>
        </div>
        <div className="cards">
          <img src={loveIcon} alt="Share Love Icon" className="icon" />
          <h3>Share Love</h3>
          <p>Giving happiness to others is one of the most fulfilling things you can do in life</p>
        </div>
        <div className="cards">
          <img src={sociallyIcon} alt="Build Socially Icon" className="socialicon" />
          <h3>Build Socially</h3>
          <p>Giving happiness to others is one of the most fulfilling things you can do in life</p>
        </div>
      </div>
    </div>
    <div className="page-container">
    <section className="featured-highlights">

    <div className="mainfeatured">
    <h1 className="h1Featured">Featured Highlights</h1>
      <div className="highlights-header">
        <div className="img">
          <img src={highlightBg} className="highlightbg"></img>
        </div>
        <div className="highlightstext">
        <p>Discover how people spread causes in the digital era</p>
        <p className="explore">Explore how social media influences charitable giving behaviors across generations.</p>
        <a href="/report" className="report-link">Read our report</a>
        </div>
      </div>

      <div className="highlights-grid">
        <HighlightCard
          title="Graduates' Stories"
          description="Read more about their journey."
          image={gradStory}
          link={PathConstants.GRAD}
        />
        <HighlightCard
          title="What do we do?"
          description="Learn about our activities."
          image={weDo}
          link={PathConstants.GRAD}
        />
        <HighlightCard
          title="How can you help?"
          description="Find out how you can contribute."
          image={help}
          link={PathConstants.GRAD}
        />
      </div>
      </div>
    </section>
    
      </div>
      </div>
        <h2 className="map">Payatas Rift</h2>
      <img src={bannerImage} alt="Banner" className="banner-image" />
    
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
        </div>
        </div>

    </div>
      </div>
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

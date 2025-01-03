import React from "react";
import "../styles/Layout.css";
import {Typography} from "@mui/material";
import bannerImage from "../img/map.png"
import happinessIcon from '../img/happiness.svg';
import loveIcon from '../img/love.svg';
import sociallyIcon from '../img/social.svg';
import gradStory from '../img/gradstory.svg';
import weDo from "../img/wedo.svg";
import help from "../img/help.svg";
import highlightBg from "../img/highlightBg.svg"
import PathConstants from "../routes/pathConstants";
import firstcard from "../img/bg.svg"
import secondcard from "../img/secondcard.svg"
import thirdcard from "../img/thirdcard.svg"
import fourthcard from "../img/fourthcard.svg"
import fifthcard from "../img/fifthcard.png"
import sixthcard from "../img/sixthcard.svg"
import seventhcard from "../img/seventhcard.svg"
import communityImage from  "../img/communityImage.svg"
import Imelda from "../img/Imelda.png";
import sponsortwo from "../img/sponsortwo.png";
import sponsorthree from "../img/sponsorthree.png";
import sponsorfour from "../img/sponsorfour.png";



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
      "The Philippines premier social impact platform designed to elavate your charity effortlessly",
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
          <div className="donatebutton1">
          <button className="donatenow">Donate Now</button>
          <a className="watchvideo" href="https://www.youtube.com/watch?v=g-XD2d43LXo">▶ Watch Video</a>
          </div>
        </div>
      
      </div>
      <div className="page-container">
        <div className="firstcards">
          <div className="firstsection-card">
          <img src={firstcard} className="firstcard"></img>
          <img src={secondcard} className="secondcard"></img>
            <div className="firstcard-text">
          <h1>16.3%</h1>
          <p>A 2024 survey conducted by the Social Weather Stations from September 14 to 23, 2024 estimated 16.3 Filipino families.</p>
          <div className="fourthcard-button-container">
          <button className="firstcard-button">Donate Now
          <span className="first-button-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="18" x2="18" y2="6" />
        <polyline points="6,6 18,6 18,18" />
      </svg>
    </span>
          </button>   
          </div>
          </div>
          </div>
          <div className="thirdsection-card">
          <img src={thirdcard} className="thirdcard"></img>
          <div className="thirdcard-text">
            <h3>Health</h3>
            <p>lifeskills for 2,213 children in Philippines</p>
          </div>
          </div>
          <div className="thirdsection-card">
          <img src={fourthcard} className="fourthcard"></img>
          <div className="fourthcard-text">
            <p>Join 5000+ People Donate</p>
            <div className="fourthcard-button-container">
          <button className="fourthcard-button">Join Community
          <span className="button-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="18" x2="18" y2="6" />
        <polyline points="6,6 18,6 18,18" />
      </svg>
    </span>
          </button>
         
          </div>
          </div>
          </div>
          <div className="thirdsection-card">
          <img src={fifthcard} className="fifthcard"></img>
          <div className="thirdcard-text">
          <h3>Education</h3>
          <p>Sponsor food, education to childrens</p>
            </div>
          </div>
          <div className="secondsection-card">
          <img src={sixthcard} className="sixthcard"></img>
          <div className="sixth-button-container">
          <button className="sixth-button">Donate Now
          <span className="sixth-button-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="6" y1="18" x2="18" y2="6" />
        <polyline points="6,6 18,6 18,18" />
      </svg>
    </span>
          </button>   
          </div>
          <img src={seventhcard} className="seventhcard"></img>
          </div>
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
      <div className="page-container">
        <div className="community-container">
          <div className="community-text">
            <h2>Community Impact</h2>
            <p>
            Experience the ripple effect of change as communities share their journey with KKMK through real testimonials from sponsors, volunteers, families and students.
            </p>
            <button className="donatenow">Donate Now</button>
          </div>
          <div className="community-image">
            <img src={communityImage} className="community-imagery"></img>
          </div>
         
        </div>
        <div className="community-grid">
          <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={Imelda} alt="imelda.png" ></img>
      <h1>Imelda Hernandez "Erni" Armstrong</h1>
      <p>Co-Founder of Philippines Humanitarian, partner of KKMK</p>
    </div>
    <div className="flip-card-back">
     
     
      <p>“ I'm honoring the memory of my mother by continuing her legacy that she started with KM Foundation Founder, Father Walter Ysaac. “</p>
      <p>“ I love helping KM Foundation because of Eva Aquino. I have complete trust in her and know that all the efforts that Philippines 
        Humanitarian makes on behalf of KM Foundation are being implemented in the most efficient, professional and honorable way. “</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={sponsortwo} alt="sponsortwo.png" ></img>
      <h1>4T Foundation International</h1>
      <p>Sponsors (Men, Josy, Jed & Nicho) for 20 years</p>
    </div>
    <div className="flip-card-back">
     
     
      <p>“ We are 4T foundation International, based in Escondido, California, USA. We have supported Kapatidkitamahalkita Foundation's scholarship and outreach/feeding programs for almost 20 years now. Your foundation has done a great job in monitoring our scholars' needs and making sure that the 1 funds are used for whatever they are alotted for “</p>
      <p>“ God bless you for all the good things that you do for our less fortunate brothers and sisters in Christ. “</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={sponsorthree} alt="sponsorthree.png" ></img>
      <h1>Cori Sutherland</h1>
      <p>Philippines Humanitarian Executive Director</p>
    </div>
    <div className="flip-card-back">
     
     
      <p>“ Since 2015, my family has sponsored two students through the KKMK Foundation, deeply moved by the heartfelt communications we received.  As someone who has worked in nonprofits in the United States, I knew just how much time and care it took to ensure that my family had a true connection with the girls we were supporting.“</p>
      <p>“ I am sincerely grateful for the KKMK Foundation's partnership in our efforts to alleviate poverty through education. “</p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={sponsorfour} alt="sponsorfour.png" ></img>
      <h1>Paulina Michaud</h1>
      <p>Proud Sponsor of KKMK Foundation for 20 years</p>
    </div>
    <div className="flip-card-back">
     
     
      <p>“ The KapatidKita, MahalKita Foundation (KM Foundation) transforms hundreds of children’s lives by offering quality education and resources, empowering them toward a brighter future. Their dedication inspires my 20-year commitment. “</p>
      <p>“ I cannot say enough about the wonderful job this Foundation does. I hope they get to support to continue their endeavor for many more years. “</p>
    </div>
  </div>
</div>
          </div>
      </div>
      </div>
        <h2 className="map">Payatas Rift</h2>
      <img src={bannerImage} alt="Banner" className="banner-image" />
    
      
  
    </div>
    
  );
};

export default Home;

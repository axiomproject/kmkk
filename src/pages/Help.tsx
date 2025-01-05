import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Layout.css";
import bannerImage from "../img/coverphoto.png"
import donatepicture from "../img/donatepicture.png"
import volunteerpicture from "../img/volunteer.svg"
import partnerwithus from '../img/partnerwithus.svg';
import Ellipse from '../img/Ellipse.png';
import KMKK from '../img/KKMK.svg';
import KMKK2 from '../img/KKMK2.svg';
import yellowkid from '../img/yellowkid.png'

const Help: React.FC = () => {

  const [SearchParams, setSearchParams] = useSearchParams();
  const initialTab = SearchParams.get("tab") || "partner";
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [animationClass, setAnimationClass] = useState<string>("fade-in");

  useEffect(() => {
      setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveTab(tab);
        setAnimationClass("fade-in");
        setSearchParams({ tab });
      }, 300); 
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "partner":
        return (
          <div className={`tab-content ${animationClass}`}>
            <div className="partner-section">
              <div className="partner-content">
                <h1>Partner with Us</h1>
                <p>
                  We welcome collaborations with organizations, corporations, and individuals who share our vision of
                  empowering underprivileged communities through education and support.
                </p>
                <p>
                  We offer flexible partnership options tailored to suit your specific goals and preferences. Whether
                  you’re looking to sponsor a student, organize a fundraising event, or initiate a corporate giving
                  program, we’re here to work with you every step of the way.
                </p>
                <p>
                  Together, we can create positive change and build a brighter future for those in need. Partner with us
                  today and be a part of something truly impactful.
                </p>
              </div>
              <img src={partnerwithus} alt="Partner with Us" className="partner-icon" />
            </div>
          </div>
        );
        case "sponsor":
          return (
            <div className={`tab-content ${animationClass}`}>
              <div className="page-container">
               <div className="sponsor-container">
    <div className="sponsor-text">
<h1>Sponsor a Student</h1>
<p>By sponsoring one of the following students, you will give them the opportunity to get an education so they can escape the cycle of poverty. Your contribution pays for their transportation to school, uniforms, books, tuition, and other school-related expenses.</p>
<p>Once you’ve chosen the student you would like to sponsor, we will send you a more detailed student profile. At that point, we will start your student sponsorship based on a donation of:</p>
</div>
 </div>
              <div className="shape-container">
                
              <div className="shape">
              <h1>PHP 12,000 /
                School year
              </h1>
              <h1>for k - Grade 6
                Students
              </h1>
              </div>
              <div className="shape">
              <h1>PHP 12,000 /
                School year
              </h1>
              <h1>for k - Grade 6
                Students
              </h1>
              </div>
              <div className="shape">
              <h1>PHP 12,000 /
                School year
              </h1>
              <h1>for k - Grade 6
                Students
              </h1>
              </div>
              <div className="shape">
              <h1>PHP 12,000 /
                School year
              </h1>
              <h1>for k - Grade 6
                Students
              </h1>
              </div>
              </div>

              <div className="sponsorp-text">
              <p>You may either set up a recurring monthly donation, or you may make a one-time payment for an annual sponsorship. If you choose an annual sponsorship, we will send you a renewal request when it’s about to expire. 
                Our hope is that, like almost all of our sponsors, you will opt to continue helping your student. Your commitment means the world to these children and, in turn, they will strive to honor your participation in their education.</p>
                </div>
                <div className="yellow-picture"> 
    <img src={yellowkid} alt="yellow"></img>
    <div className="bottom-left">1.3 Donations</div>
    </div>
    <div className="Maxine-text">
    <p>Maxine Rose: Journey to Success </p>
    <div className="progress-bar">

    <p>₱13,200 raised</p>
    </div>
    </div>
 
              </div>
             
           </div>
          );
      case "donate":
        return (
          <div className={`tab-content ${animationClass}`}>
            <div className="donate-container">
              <div className="donate-text">
                <h1>Donate</h1>
                <p>
                  By making a donation to KM Foundation, you can support our various programs and initiatives aimed at
                  uplifting underprivileged communities. Whether you choose to make a one-time donation, a regular
                  contribution, or an in-kind donation, your generosity will make a meaningful difference in the lives of
                  those in need.
                </p>
                <ul>
                  <li>
                    <b>One-time Donation:</b>
                    <ul>
                      <li>Housing Assistance/Repair</li>
                      <li>Recreational Activities of Children (Educational Tour)</li>
                      <li>General/Administrative Fund of the Foundation</li>
                    </ul>
                  </li>
                  <li>
                    <b>Regular Donation:</b>
                    <ul>
                      <li>Feeding Programs</li>
                    </ul>
                  </li>
                  <li>
                    <b>In-kind Donation:</b>
                    <ul>
                      <li>
                        Contribute by donating essential items such as food, clothing, medicines, and more. Your
                        thoughtful donations can make a meaningful impact on the lives of those in need.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="donate-picture">
                <img src={donatepicture} alt="Donate" />
                
              </div>
             
            </div>
          </div>
        );
        case "volunteer":
          return (
            <div className={`tab-content ${animationClass}`}>
              <div className="volunteer-container">
                <div className="volunteer-text">
                  <h1>Become a Volunteer</h1>
                  <p>
                  Volunteering is a rewarding opportunity to make a positive impact in the lives of others while contributing to meaningful projects and initiatives. Whether you’re passionate about education, the arts, digital media, or community engagement, there are various ways you can get involved and lend your skills and expertise to support our mission. 
                  </p>
                 <p>
                 These volunteer activities are just a few examples of how you can get involved and contribute your time and talents to support our organization’s mission. We welcome individuals with diverse skills, backgrounds, and interests to join us in creating positive change and empowering communities in need. If you’re interested in volunteering with us or learning more about our volunteer opportunities, please contact us for further information.
                 </p>
                </div>
                <div className="volunteer-picture">
                  <img src={volunteerpicture} alt="Volunteer" />
                </div>
              </div>
            </div>
          );
          case "faq":
            return (
              <div className={`tab-content ${animationClass}`}>
                <div className="faq-container">
    <div className="faq-item1">
      <div>
        <a href="your-link-1">
          <img src={KMKK} alt="FAQ" />
        </a>
      </div>
      <div className="faq-text">
        <a href="your-link-1">
          <h1>Best Practice for Donating Safely Online with Kmkk</h1>
        </a><br />
        <p>Answers to “How can I donate safely online?”</p>
        <div className="kmkk-team">
          <img src={Ellipse} alt="FAQ" />
          <p>by Kmkk Team</p>
        </div>
      </div>
    </div>

    <div className="faq-item2">
      <div>
        <a href="your-link-2">
          <img src={KMKK2} alt="FAQ" />
        </a>
      </div>
      <div className="faq-text">
        <a href="your-link-2">
          <h1>Are There More Ways I Can Help Beyond Donating?</h1>
        </a><br />
        <p>You can help further the causes you care about with these ideas.</p>
        <div className="kmkk-team">
          <img src={Ellipse} alt="FAQ" />
          <p>by Kmkk Team</p>
        </div>
      </div>
    </div>
  </div>
              </div>
            );
      default:
        return null;
    }
  };



  return (
    <div className="home-container">
      <img src={bannerImage} className="banner-image"></img>
    <div className="page-container">
   <div className="help-tabs">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === "partner" ? "active" : ""}`}
          onClick={() => handleTabChange("partner")}
        >
          PARTNER WITH US
        </button>
        <button
          className={`tab-button ${activeTab === "sponsor" ? "active" : ""}`}
          onClick={() => handleTabChange("sponsor")}
        >
          SPONSOR A STUDENT
        </button>
        <button
          className={`tab-button ${activeTab === "donate" ? "active" : ""}`}
          onClick={() => handleTabChange("donate")}
        >
          DONATE
        </button>
        <button
          className={`tab-button ${activeTab === "volunteer" ? "active" : ""}`}
          onClick={() => handleTabChange("volunteer")}
        >
          VOLUNTEER
        </button>
        <button
          className={`tab-button ${activeTab === "faq" ? "active" : ""}`}
          onClick={() => handleTabChange("faq")}
        >
          FAQ
        </button>
      </div>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  </div>
  </div>
);
};


export default Help;

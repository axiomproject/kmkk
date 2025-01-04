import React, { useState } from "react";
import "../styles/Layout.css";
import bannerImage from "../img/coverphoto.png"
import donatepicture from "../img/donatepicture.png"
import volunteerpicture from "../img/volunteer.svg"
import partnerwithus from '../img/partnerwithus.svg';

const Help: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("partner");
  const [animationClass, setAnimationClass] = useState<string>("fade-in");

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setActiveTab(tab);
        setAnimationClass("fade-in");
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
              <div className="partner-section">
                <h1>wala pa</h1>
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
                <div className="volunteer-container">
                  <h1>wala pa</h1>
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

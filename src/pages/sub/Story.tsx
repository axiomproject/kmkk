import React from "react";
import "../../styles/Layout.css";
import bannerImage from '../../img/story.png';
import storyImage from '../../img/father.png'; 
import missionImage from '../../img/missionvission.png'; 
import orgImage from '../../img/org.png'; 

const Story = () => {
  return (
    <div className="home-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="story-section">
        <div className="story-content">
          <div className="story-text">
            <p>
              In the heart of Payatas B, the Kapatidkita Mahalkita Foundation – Payatas B, Inc., formerly known as KM Foundation, was founded by Fr. Walter L. Ysaac, S.J., who envisioned a community bound by the principle “You are my brother/sister, I love you.” With a commitment to sharing and authentic love, the foundation’s mission translates into meaningful actions and lasting relationships. Inspired by philosopher Bernard Lonergan’s principles on community-building, Fr. Ysaac began work in 1976 in two underserved barrios in San Mateo, Rizal, which expanded by 1983 to support 43 children from the most impoverished families in their education from kindergarten to college. Driven by a vision for greater community engagement, Fr. Ysaac extended his outreach to neighboring areas, and in 2002, Puso Philippines became a key partner in the United States, helping to amplify the foundation’s impact.
            </p>
          </div>
          <div className="story-image-container">
               <img src={storyImage} alt="Fr. Walter L. Ysaac, S.J." className="story-image" />
            <p className="story-caption">Fr. Walter L. Ysaac, S.J.</p>
          </div>
        </div>
      </div>
      <div className="story-section">
        <div className="story-content reverse-layout">
          <div className="story-image-container">
            <img src={missionImage} alt="Another Related Image" className="mission-image" />
           
          </div>
          <div className="story-text">
            <p>
            The KM Foundation’s mission is to uplift and empower impoverished children by providing nourishment, healthcare, education, and youth development while rebuilding their homes and lives. Its vision is to combat extreme poverty through the effective implementation of these programs, aiming for long-term, sustainable impact.
            </p>
          </div>
        </div>
      </div>
      <div className="story-section">
        <div className="story-content reverse-layout">
          <div className="story-image-container">
            <img src={orgImage} alt="Another Related Image" className="org-image" />
           
          </div>
          <div className="story-text">
            <p>
            In 2011, Reed Elsevier Philippines started supporting 26 children, growing tokv 220 sponsored students by the academic year 2023-2024. Philippines Humanitarian, founded by Ms. Imelda H. Armstrong in June 12, 2012, has been instrumental in supporting 276 students from grade 2 to college.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

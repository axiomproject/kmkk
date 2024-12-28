import React, { useState } from 'react';
import lifeImage from "../img/life.png"




interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface ImageData {
  src: string;
  tags: string[];
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ display: value === index ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
};

const Life: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  const images: ImageData[] = [
    { src: "/images/1.png", tags: ["Educating the Young"] },
    { src: "images/2.png", tags: ["Educating the Young"] },
    { src: "/images/3.png", tags: ["Educating the Young"] },
    { src: "/images/4.png", tags: ["Health and Nutrition"] },
    { src: "/images/5.png", tags: ["Special Programs"] },
    { src: "/images/6.png", tags: ["Special Programs"] },
    { src: "/images/7.png", tags: ["Special Programs"] },
  ];

  const tabs = ["All", "Educating the Young", "Health and Nutrition", "Special Programs"];



  return (
    <div className="home-container" >
<img src={lifeImage} alt="Banner" className="life-image" />
<p className="lifetext">Welcome to the heart of KM Foundation, where every individual – staff, sponsored students, and sponsors – plays a vital role in crafting a narrative of hope, growth, and lasting impact. Here’s a glimpse into the unique experiences that define Life with KM Foundation</p>
<div className="app-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${value === index ? 'active' : ''}`}
            onClick={() => handleChange(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          <div className="image-grid">
            {images
              .filter(image => tab === "All" || image.tags.includes(tab))
              .map((image, i) => (
                <div className="image-wrapper" key={i}>
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1} Image ${i + 1}`}
                    className="gallery-image"
                  />
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </div>
    </div>
  );
};

export default Life;

import React, { useState } from "react";
import "../../styles/Layout.css";
import bannerImage from "../../img/coverphoto1.png";

interface ImageData {
  src: string;
  tags: string[];
  name: string;
  description: string;
}

const Faq: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      src: "/images/8.jpg",
      tags: [],
      name: "SARAH PALENQUEZ",
      description: `I am a former scholar of KKMK from grade 1 until I graduated with a Bachelor’s degree in Business Administration major in Marketing at Polytechnic University of the Philippines. Looking back, I can firmly say that it was a great opportunity to be chosen as one of the beneficiaries of KKMK. I was raised by my single mom and I have five siblings. In 2015, I was able to finish my studies, and since then I started working as an accounting assistant in one of the leading banks in the Philippines. I can now treat my family for a dinner in a fancy restaurant and even travel abroad. Who would have known that those simple acts of kindness can change our life and bring us out from poverty? I hope there are more people who’ll join hands in supporting KKMK Foundation. Their impact goes beyond financial assistance; they are catalysts for dreams, breaking the cycle of poverty for countless individuals. These acts of kindness exemplify the strength of human connection and the positive change it can bring. As I reflect on my journey, I am not only grateful for the opportunities provided but also inspired to pay it forward. The sense of responsibility instilled in me motivates me to contribute to the community and help others facing similar challenges. By sharing my story, I hope to encourage more individuals to extend a helping hand, no matter how small, to those in need. Every person empowered through such foundations becomes a beacon of hope, proving that change is possible, one life at a time.`,
    },
    {
      src: "/images/9.jpg",
      tags: [],
      name: "MICHAEL JOHN CONTINIDO",
      description: "As someone who doesn’t have much in life – especially in financial aspect, my wildest dream is to uplift my family’s quality of living. KKMK in partnership with REPH gave me a huge hope to make this dream possible by giving me a life-changing opportunity. With the help of their scholarship program, I was able to obtain my Bachelor’s degree in Office Administration at Polytechnic University of the Philippines, I graduated Cum Laude. Now that I am building my career, I’m planning to give back to the community to inspire the young ones that education is significant in shaping us holistically. I am currently employed in a real estate and developer company. I am beyond grateful for what I have right now – KKMK and REPH are huge part of my journey in life. Thank you so much!!!",
    },
    {
      src: "/images/10.jpg",
      tags: [],
      name: "ABEGAIL CANO",
      description: "I’m a former Amelia S. Hernandez’ scholar (under KKMK in partnership with Philippines Humanitarian). I obtained my Bachelor’s degree in Social Work at University of Rizal System. I’m now a registered social worker and I thank you all for the support you have provided me. I’m currently working at IBM Philippines as a Process Delivery Specialist. As a result of my hard work, I am a consistent top performer since 2022. This may serve as an inspiration to other scholars that all things are possible as long as we trust God and we give our best in everything we do.",
    },
    {
      src: "/images/11.jpg",
      tags: [],
      name: "DIVINE GRACE CABUG-OS",
      description: "I started my journey with Kapatidkita Mahalkita Foundation in 2002 when I was just a 6-year-old kid. Years later, I took up a Bachelor’s degree in Business Teacher’s education at the Polytechnic University of the Philippines – QC and eventually graduated Cum Laude. Soon, I became a licensed teacher and had a year of teaching experience at a private school. Now working as a Social Development Worker for an International NGO, I can see how being a scholar of the Kapatidkita Mahalkita Foundation molded me (and my fellow scholars) to become competent and compassionate individuals. Aside from the monetary allowances for my daily expenses in school, I also gained opportunities to enhance my skills and boost my confidence through fun and meaningful activities. Those are the memories that I still look back on with great fondness. Being given the trust to pursue higher education through the sponsorship program was an important milestone that has significantly changed the trajectory of my life. Now working as a community worker as well, I make a promise to believe in the potential of people and help them unleash it — the same way this organization did for me.",
    },
    {
      src: "/images/12.jpg",
      tags: [],
      name: "JEANNEL CRAIS",
      description: "Being a recipient of the Amelia S. Hernandez Scholarship in partnership with KKMK Foundation makes me truly grateful. It gave me hope and determination to pursue my dreams in life. KKMK Foundation helped me in my journey to become what I am now, and motivated me to aim high and to grow as a competent individual. I am currently a part of a growing construction company. I’m continuously striving to become more efficient and professional in my field of work. I am now supporting my family financially, and enjoying my work as an accounting staff. I never thought that I would be able to fulfill my dream of earning a Bachelor’s degree in Business Administration major in Marketing Management. Now I believe that if we inspire others to succeed, they can surely achieve it.",
    },
    {
      src: "/images/13.jpg",
      tags: [],
      name: "ROSEMHER LUCERIO",
      description: "I was accepted in KKMK Foundation in 2012 (grade 6). They provided me with everything I need for my studies. They never stopped supporting me in my school expenses from grade 6 until I completed my college education. It’s not just financial assistance because they also motivated and encouraged us to fulfill our dreams, no matter how hard it is. They taught me to be resilient and determined in achieving my goals. As a young child with hopes of finishing a college degree, KKMK Foundation looked after me and inspired me to keep going and make my dreams come true.  I found a good job as an Operations Specialist in a multinational company. I’m very grateful to KKMK Foundation and to all sponsors who continuously support the dreams of the disadvantaged children in Payatas B, Quezon City.",
    },
  ];

  const openModal = (image: ImageData) => {
    setModalContent(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="home-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="introduction">
        <h1 className="Testimonial">Graduate Testimonials</h1>
        <h4 className="h4-testimonial">
          Hear from our graduates whose lives were forever changed by the gift
          of education. Read, be inspired, and consider becoming a sponsor to be
          a part of these incredible journeys.
        </h4>
      </div>
      <div className="image-grid1">
        {images.map((image, i) => (
          <div
            className="image-wrapper1"
            key={i}
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={`gallery image ${i + 1}`}
              className="gallery-image1"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-image-wrapper"></div>
            <div className="modal-content">
              <img
                src={modalContent.src}
                alt={modalContent.name}
                className="modal-image"
              />
              <div className="modal-text">
                <h2 className="modal-title">{modalContent.name}</h2>
                <p className="modal-description">{modalContent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;

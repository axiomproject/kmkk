import React, { useState } from "react";
import { Collapse, ButtonBase } from "@mui/material";
import "../../styles/Layout.css";
import bannerImage from "../../img/coverphoto1.png"


interface ImageData {
  src: string;
  name: string;
  subtitle: string;
  description: string;
}

const Community: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      src: "/images/14.png",
      name: "Cori Sutherland",
      subtitle: "Philippines Humanitarian Executive Director",
      description:   `
                  <p>I have known of the KKMK Foundation since 2015, when my family began sponsoring two students through Philippines Humanitarian. From the very beginning, I was so moved and impressed by the student communications we received. As someone who has worked in nonprofits in the United States, I knew just how much time and care it took to ensure that my family had a true connection with the girls we were supporting.</p>

                  <p>Since then, my involvement with Philippines Humanitarian has deepened, as I first became a member of the organization’s Board of Directors and then its Executive Director. As I more fully understood the KKMK Foundation’s work, I came to completely respect, admire, and trust their staff. Everyone there has both a heartfelt compassion for the people they serve, along with a straight-up professionalism and accountability. This combination accounts for the high student retention rate we see in our programs, and gives us complete confidence in their financial and program management. I am sincerely grateful for the KKMK Foundation’s partnership in our efforts to alleviate poverty through education.</p>
      `,    
    },
    {
      src: "/images/15.png",
      name: "Paulina Michaud",
      subtitle: "Proud Sponsor of KKMK Foundation",
      description:   `
                  <p>KapatidKita, MahalKita Foundation (KM Foundation) is changing the lives of hundreds of kids by providing them with quality education and resources to empower them in building a brighter future for themselves and their future generations. The Foundation’s incredible work and commitment to the students have encouraged me to maintain my commitment for 20 years.</p>

                  <p>In 2004, I became the sponsor of Alexander John Cabudbud. He was in first grade and looked very much like my son when he was his age. In 2017, Alex graduated from college. He obtained a Bachelor of Science in Computer Engineering and received the Academic Excellence Award upon his graduation.</p>

                  <p>Throughout the years, the Foundation kept me posted on Alexander’s grades and overall progress and sent me beautiful letters and cards Alex had written for me. Today, he has a stable job as a Project Engineer at a company in the Philippines. He volunteers at the Foundation to give back and help this wonderful mission. Later, he found me on Facebook, and we connected. He is like a son to me, and I am very proud of him.</p>

                  <p>I have had the pleasure to sponsor other students throughout these years. I cannot say enough about the wonderful job this Foundation does. I hope they get to support to continue their endeavor for many more years.</p>
      `,    
    },
    {
      src: "/images/16.jpg",
      name: "Imelda Hernandez “Erni” Armstrong",
      subtitle: "Co-Founder of Philippines Humanitarian, Philippines Humanitarian",
      description:  `
                  <p>“You have not lived today until you have done something for someone who can never repay you.”</p>

                  <p>My mother, Amelia Samson Hernandez who introduced KM Foundation to friends and family more than 15 years ago, helped us to understand that giving someone a hand should be done without the expectation of getting back anything in return other than the good feeling that you’ve done something good for someone who couldn’t do it for themselves.</p>

                  <p>KM Foundation, however, goes beyond that good feeling because of the total dedication and far-reaching efforts of Eva Aquino, KM Foundation Program Director, and her team. Eva ensures that every donor receives a letter of introduction and each sponsored student continues to stay in touch with his/her donor because Eva understands the importance of having that kind of connection so donors can feel they’re investing in something worthwhile. She takes the time to know the hundreds of students who are part of the program and provides their families with good counsel regarding their education, their health and their living conditions. She has done this for years largely on her own, until recently when she was able to ask a few others to join her team. Managing the number of students and donors that are now part of KM Foundation is a monumental task, and it is hard to imagine the amount of effort and commitment it takes to do that in addition to supervising the day-to-day operations and making sure that KM Foundation meets all the requirements to be a certified NGO.</p>

                  <p>So why do I love helping KM Foundation? There are three big reasons:</p>

                  <p>I have been blessed to have what I have and I truly feel that I owe it to those who are less fortunate to give them a helping hand. It makes a huge impact for me to know that I am doing my best to make a difference by helping people escape the cycle of poverty and being a part of changing their futures.</p>
                  
                  <p>I’m honoring the memory of my mother by continuing her legacy that she started with KM Foundation Founder, Father Walter Ysaac.</p>

                  <p>Last, but not least, I love helping KM Foundation because of Eva Aquino. I have complete trust in her and know that all the efforts that Philippines Humanitarian makes on behalf of KM Foundation are being implemented in the most efficient, professional and honorable way.</p>            
      `,    
    },
    {
      src: "/images/17.png",
      name: "",
      subtitle: "",
      description:  `
                  <p>We are 4T Foundation International, based in Escondido, California, USA. We have supported Kapatidkitamahalkita Foundation’s scholarship and outreach/feeding programs for almost 20 years now. Your foundation has done a great job in monitoring our scholars’ needs and making sure that the funds are used for whatever they are allotted for.</p>
  
                  <p>Our scholars wrote letters to us, introducing themselves and their families, acknowledging the support they received. They are like our extended family and greet us on special occasions.</p>
  
                  <p>We would also like to commend Mrs. Evangeline Aquino, who epitomizes trustworthiness and dedication to the job. We have worked with her on several outreach/feeding programs for our poverty-stricken community in Lupang Pinangako in Payatas. Those visits to Payatas are one of our most treasured experiences. We hope and pray that we could continue to work with Kapatidkitamahalkita Foundation.</p>
  
                  <p>God bless you for all the good things that you do for our less fortunate brothers and sisters in Christ.</p>
      `,
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
        <h1 className="Testimonial">Our Community</h1>
        <h4 className="h4-testimonial">
          The KM Foundation’s community initiatives aim to empower and support Payatas residents through 
          programs in health, education, and livelihood, fostering resilience and growth within one of the 
          most underserved areas.
        </h4>
      </div>
      <div className="image-grid2">
        {images.map((image, i) => (
          <div
            className="image-wrapper2"
            key={i}
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={`gallery image ${i + 1}`}
              className="gallery-image2"
            />
          </div>
        ))}
      </div>

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
                className="modal-image2"
              />
              <div className="modal-text">
                <h2 className="modal-title">{modalContent.name}</h2>
                  {modalContent.subtitle && (
                <h5 className="modal-subtitle">{modalContent.subtitle}</h5>
                )}
              </div>
              <div className="modal-description" dangerouslySetInnerHTML={{ __html: modalContent.description }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
import React from "react";
import "../../styles/Layout.css";
import bannerImage from "../../img/team.png";

const teamMembers = [
  { id: 1, name: "Angel M. Vallermosa", subText: "The Nocillado Lover", profileClass: "profile-1" },
  { id: 2, name: "Christian Mark R. Nocillado", subText: "The Diabolical", profileClass: "profile-2" },
  { id: 3, name: "Darwin B. Gatela", subText: "Fernando Poe ng Quezon City", profileClass: "profile-3" },
  { id: 4, name: "Deanelle Kyla P. Datiles", subText: "Lorem ipsum", profileClass: "profile-4" },
  { id: 5, name: "Domingo C. Mangulad", subText: "The True OG", profileClass: "profile-5" },
  { id: 6, name: "Elmer Jr. A. Realista", subText: "Lorem ipsum", profileClass: "profile-6" },
  { id: 7, name: "Emerson M. Velasco", subText: "Resident Technician", profileClass: "profile-7" },
  { id: 8, name: "Hyacent Claire O. Fernandez", subText: "Tiger Commando", profileClass: "profile-8" },
  { id: 9, name: "Jason Marc D. Valencia", subText: "The Kargador ang Paa", profileClass: "profile-9" },
  { id: 10, name: "John Carlo B. Cagadas", subText: "Lorem ipsum", profileClass: "profile-10" },
  { id: 11, name: "John Emil N. Dumalasa", subText: "Secret", profileClass: "profile-11" },
  { id: 12, name: "June Carl A. Genavia", subText: "Mortal na Kalaban ni Tano", profileClass: "profile-12" },
  { id: 13, name: "Louvell Ayumi A. Ibarra", subText: "Lorem ipsum", profileClass: "profile-13" },
  { id: 14, name: "Mohammad Nur A. Baganday", subText: "Lorem ipsum", profileClass: "profile-14" },
  { id: 15, name: "Precious Rose Star P. Baylon", subText: "Lorem ipsum", profileClass: "profile-15" },
  { id: 16, name: "Rocella D. Peña", subText: "Amazona", profileClass: "profile-16" },
 
];

const Team = () => {
  return (
    <div className="home-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className={`image-placeholder ${member.profileClass}`} />
            <h4 className="team-name">{member.name}</h4>
            <p className="team-subtext">{member.subText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
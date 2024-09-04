import React from 'react';
import './MissionSection.css';
import missionImage from '../../Assets/missionImage.jpg'; // Adjust the path accordingly

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="image-container">
        <img src={missionImage} alt="Mentorship in Action" />
      </div>
      <div className="mission-content">
        <h2>OUR MISSION</h2>
        <p>
          Our mission is to create a supportive and transparent environment where mentors can effectively guide mentees, and mentees can easily access the assistance they need. We aim to empower both parties by providing the resources and systems necessary to foster meaningful mentor-mentee relationships.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;

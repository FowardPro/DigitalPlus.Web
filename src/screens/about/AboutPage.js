import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import MissionSection from './MissionSection';
import CoreValuesSection from './CoreValuesSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <AboutSection />
        <MissionSection />
        <CoreValuesSection />
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

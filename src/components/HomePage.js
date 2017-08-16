import React from 'react';
import NavBar from './NavBar/NavBar';
import PictureAndInfoBox from './Homepage/components/PictureAndInfoBox';
import ProfessionalSection from './Homepage/components/ProfessionalSection';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="resume-highest-parent">
        <div className="resume-personal-section">
          <PictureAndInfoBox />
        </div>
        <div className="resume-professional-section">
          <ProfessionalSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

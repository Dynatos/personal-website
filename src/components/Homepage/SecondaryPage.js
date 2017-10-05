import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import PictureAndInfoBox from './components/PictureAndInfoBox';
import ProfessionalSection from './components/ProfessionalSection';
import { resumeData } from './data/secondaryPage';

class SecondaryPage extends Component {
  
  render() {
    
    const data = resumeData;
    
    return (
      <div>
        <NavBar />
        <div className="resume-highest-parent">
          <div className="resume-personal-section">
            <PictureAndInfoBox data={data} />
          </div>
          <div className="resume-professional-section">
            <ProfessionalSection data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default SecondaryPage;

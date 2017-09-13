import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import PictureAndInfoBox from './components/PictureAndInfoBox';
import ProfessionalSection from './components/ProfessionalSection';

class HomePage extends Component {


  render() {
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
  }
}

export default HomePage;
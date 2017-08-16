import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';

const data = resumeData.dataBox;
const jobs = data.experience;

class ProfessionalSection extends Component {

  aboutMe() {
    return (
      <div className="homepage-about-me">
        {data.aboutMe}
      </div>
    );
  }

  // this is incomplete and needs to be finished, site will probably have issues because of this
  jobExperience() {
    const jobFormat = ["company", "position", "startDate", "endDate"];
    return (
      jobFormat.map(() => {})
    );
  }

  render() {

    return (
      <div className="resume-professional-child">
        {this.aboutMe()}
      </div>
    );
  }
}

export default ProfessionalSection;

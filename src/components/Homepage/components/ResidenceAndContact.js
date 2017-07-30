import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';

class ResidenceAndContact extends Component {

  render() {

    const data = resumeData.pictureAndInfoBox;
    const residence = data.currentResidence;
    const contact = data.contactInfo;

    return (
      <div className="resume-residence-contact">
        <div className="resume-residence">
          {residence}
        </div>
        <div className="resume-contact">
          {contact}
        </div>
      </div>
    );
  }
}

export default ResidenceAndContact;

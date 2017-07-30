import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';

class NameAndTitle extends Component {

  render() {

    const data = resumeData.pictureAndInfoBox;
    const name = data.name;
    const title = data.title;

    return(
      <div>
        <h2 className="resume-name">
          {name}
        </h2>
        <h3 className="resume-title">
          {title}
        </h3>
      </div>
    );
  }
}

export default NameAndTitle;

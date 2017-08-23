import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';
import Skills from "./Skills";

const data = resumeData.dataBox;
const jobs = data.experience;
let mappedJobs = [];

class ProfessionalSection extends Component {

  aboutMe() {
    return(
      <div className="homepage-about-me">
        {data.aboutMe}
      </div>
    );
  }

  experience(jobNumber) {
    return(
      <div key={"jobExperience" + jobNumber} className={"resume-job-experience job-number-" + jobNumber}>
        <div className="resume-job-company-name company">
          {jobs[jobNumber].company}
        </div>
        <div className="resume-job-position">
          {jobs[jobNumber].position}
        </div>
        <div className="resume-job-start-date resume-job-date">
          {jobs[jobNumber].startDate}
        </div>
        <div className="resume-job-end-date resume-job-date">
          {jobs[jobNumber].endDate}
        </div>
      </div>
    );
  }

  renderJobs() {
    for (let i = 0; i < jobs.length; i++) {
      mappedJobs.push(i);
    }
    return mappedJobs.map(e => this.experience(e));
  }

  render() {
    return (
      <div className="resume-professional-child">
        {this.aboutMe()}
        {this.renderJobs()}
        <Skills />
      </div>
    );
  }
}

export default ProfessionalSection;

import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';
import Skills from "./Skills";

const data = resumeData.dataBox;
const jobs = data.experience;
let mappedJobs = [];

class ProfessionalSection extends Component {

  aboutMe() {
    return(
      <div className="resume-about-me-parent">
        <div className="resume-title-bar resume-about-me-title-box">
          About This Page:
        </div>
        <div className="resume-about-me">
          {data.aboutMe}
        </div>
      </div>
    );
  }

  experience(jobNumber) {
    return(
      <div key={"jobExperience" + jobNumber}>
        <div  className={"resume-job-experience job-number-" + jobNumber}>
          <div className="resume-job-company-name company">
            {jobs[jobNumber].company}
          </div>
          <div className="resume-job-position">
            {jobs[jobNumber].position}
          </div>
          <div className="resume-job-dates-parent">
            <div className="resume-job-start-date resume-job-date">
              {jobs[jobNumber].startDate}
            </div>
            <div>
              &mdash;
            </div>
            <div className="resume-job-end-date resume-job-date">
              {jobs[jobNumber].endDate}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // This is the only part of this component that isn't really self explanatory. This function allows the page to render
  // all of the objects in our data file dynamically, so if a job is added or removed the page will reflect this change
  // automatically. The if statement is a fix for the page rendering an additional experience method every time the page
  // was reloaded. The return statement must be outside of the if statement or the app will stop displaying the experience
  // section altogether
  renderJobs() {
    if (mappedJobs.length === 0) {
      for (let i = 0; i < jobs.length; i++) {
        mappedJobs.push(i);
      }
    }
    return mappedJobs.map(e => this.experience(e));
  }

  render() {
    return (
      <div className="resume-professional-child">
        {this.aboutMe()}
        <div className="resume-title-bar resume-job-experience-title-box">
          Professional History:
        </div>
        <div className="resume-jobs-parent">
          {this.renderJobs()}
        </div>
        <div className="resume-skills-highest-parent">
          <div className="resume-title-bar resume-skills-title-box">
            Skills:
          </div>
          <Skills />
        </div>
      </div>
    );
  }
}

export default ProfessionalSection;

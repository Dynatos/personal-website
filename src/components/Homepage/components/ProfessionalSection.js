import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Skills from "./Skills";

class ProfessionalSection extends Component {

  aboutMe() {

    const { data } = this.props;

    return(
      <div className="resume-about-me-parent">
        <h4 className="resume-title-bar resume-about-me-title-box">
          About
        </h4>
        <div className="resume-about-me">
          {data.dataBox.aboutMe}
        </div>
      </div>
    );
  }



  // This is the only part of this component that isn't really self explanatory. This function allows the page to
  // render all of the objects in our data file dynamically, so if a job is added or removed the page will reflect
  // this change automatically.

  renderJobs() {
    const { data } = this.props;
    const jobs = data.dataBox.experience;
    return jobs.map(function renderJobsCallback(e, jobNumber) {
      return (
        <div key={"jobExperience" + jobNumber}>
          <div  className={"resume-job-experience job-number-" + jobNumber}>
            <div className={"resume-job-company-name company--" + jobs[jobNumber].company}>
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
    });
  }

  render() {

    return (
      <div className="resume-professional-child">
        {this.aboutMe()}
        <h4 className="resume-title-bar resume-job-experience-title-box">
          Professional History
        </h4>
        <div className="resume-jobs-parent">
          {this.renderJobs()}
        </div>
        <div className="resume-skills-highest-parent">
          <h4 className="resume-title-bar resume-skills-title-box">
            Skills
          </h4>
          <Skills {...this.props} />
        </div>
      </div>
    );
  }
}

export default ProfessionalSection;


ProfessionalSection.propTypes = {
  data: PropTypes.object.isRequired
};

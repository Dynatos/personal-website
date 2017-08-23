import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';

const data = resumeData.dataBox;
const skills = data.skills;

class Skills extends Component {

  skillBox(skillNumber) {
    return(
      <div key={skills[skillNumber]} className="resume-skills-skill">
        {skills[skillNumber]}
      </div>
    );
  }

  renderSkills() {
    let numberOfSkills = [];
    for (let i = 0; i < skills.length; i++) {
      numberOfSkills.push(i);
    }
    return numberOfSkills.map(e => this.skillBox(e));
  }

  render() {
    return (
      <div className="resume-skills-parent">
        {this.renderSkills()}
      </div>
    );
  }
}

export default Skills;

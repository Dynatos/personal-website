import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';

const data = resumeData.dataBox;
const skills = data.skills;

class Skills extends Component {

  // This method is called as the callback of a map, and it returns a new div on the page with a skill as the text.
  // This is used with the renderSkills method below to dynamically render a box for every skill in our data array
  skillBox(skillNumber) {
    return(
      <div key={skills[skillNumber]} className="resume-skills-skill">
        {skills[skillNumber]}
      </div>
    );
  }

  // This method renders a div for every skill in our data, it does this by creating an empty array and pushing an
  // index (number starting from 0) for every item in the "skills" array of the data. This array of indexes is then
  // used to return a mapped div for each of these skills
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

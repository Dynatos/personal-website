import React, {Component} from 'react';

class Skills extends Component {
  
  render() {
    
    const { data } = this.props;
    console.log('skills data:', data);
    const skills = data.dataBox.skills;
  
    // This method renders a div for every skill in our data, it does this by creating an empty array and pushing an
    // index (number starting from 0) for every item in the "skills" array of the data. This array of indexes is then
    // used to return a mapped div for each of these skills
    function renderSkills() {
      let numberOfSkills = [];
      for (let i = 0; i < skills.length; i++) {
        numberOfSkills.push(i);
      }
      return numberOfSkills.map(e => skillBox(e));
    }
  
    // This method is called as the callback of a map, and it returns a new div on the page with a skill as the text.
    // This is used with the renderSkills method below to dynamically render a box for every skill in our data array
    function skillBox(skillNumber) {
      return(
        <div key={skills[skillNumber]} className="resume-skills-skill">
          {skills[skillNumber]}
        </div>
      );
    }
    
    return (
      <div className="resume-skills-parent">
        {renderSkills()}
      </div>
    );
  }
}

export default Skills;

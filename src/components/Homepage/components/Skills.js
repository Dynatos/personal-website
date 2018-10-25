import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {

  render() {

    const { data } = this.props;
    const skills = data.dataBox.skills;

    // renders an element for every skill in our data object using a map
    function renderSkills() {
      return skills.map(function renderSkillsMapCallback(e, i) {
        return (
          <div key={'skills-'+i} className="resume-skills-skill">
            {e}
          </div>
        );
      });
    }

    return (
      <div className="resume-skills-parent">
        {renderSkills()}
      </div>
    );
  }
}

export default Skills;

Skills.propTypes = {
  data: PropTypes.object.isRequired
};

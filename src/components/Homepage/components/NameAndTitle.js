import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameAndTitle extends Component {

  render() {
  
    const { data } = this.props;
    const name = data.pictureAndInfoBox.name;
    const title = data.pictureAndInfoBox.title;

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

NameAndTitle.propTypes = {
  data: PropTypes.object.isRequired
};

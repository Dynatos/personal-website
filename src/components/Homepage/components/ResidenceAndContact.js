import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResidenceAndContact extends Component {

  render() {
  
    const { data } = this.props;
    const residence = data.pictureAndInfoBox.currentResidence;
    const contact = data.pictureAndInfoBox.contactInfo;

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

ResidenceAndContact.propTypes = {
  data: PropTypes.object.isRequired
};

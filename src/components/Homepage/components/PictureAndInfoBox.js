import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture';
import NameAndTitle from "./NameAndTitle";
import ResidenceAndContact from "./ResidenceAndContact";
import SocialMediaLinks from "../containers/SocialMediaLinks";

class PictureAndInfoBox extends Component {

  render() {
    
    const { data } = this.props;
    
    return(
      <div className="resume-picture-plus-info">
        <Picture data={data} />
        <NameAndTitle data={data} />
        <ResidenceAndContact data={data} />
        <SocialMediaLinks data={data} />
      </div>
    );
  }
}

export default PictureAndInfoBox;

PictureAndInfoBox.propTypes = {
  data: PropTypes.object.isRequired
};

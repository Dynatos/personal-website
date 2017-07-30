import React, {Component} from 'react';
import Picture from './Picture';
import NameAndTitle from "./NameAndTitle";
import ResidenceAndContact from "./ResidenceAndContact";
import SocialMediaLinks from "../containers/SocialMediaLinks";

class PictureAndInfoBox extends Component {

  render() {

    return(
      <div className="resume-picture-plus-info">
        <Picture/>
        <NameAndTitle/>
        <ResidenceAndContact/>
        <SocialMediaLinks/>
      </div>
    );
  }
}

export default PictureAndInfoBox;

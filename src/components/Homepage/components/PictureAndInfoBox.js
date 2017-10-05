import React, {Component} from 'react';
import Picture from './Picture';
import NameAndTitle from "./NameAndTitle";
import ResidenceAndContact from "./ResidenceAndContact";
import SocialMediaLinks from "../containers/SocialMediaLinks";

class PictureAndInfoBox extends Component {

  render() {
    
    const { data } = this.props;
    console.log('picture and info box data:', data);
    
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

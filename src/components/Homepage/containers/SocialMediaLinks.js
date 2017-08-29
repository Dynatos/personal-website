import React, {Component} from 'react';
import {resumeData} from '../data/homepageResumeData';

const data = resumeData.pictureAndInfoBox;
const link = data.externalURLs;
const image = data.externalURLImages;

class SocialMediaLinks extends Component {

  // In this method we map an anchor element (link) with the icon associated inside the anchor. This gives us an icon
  // that can be clicked to go to the associated profile.
  makeMedia() {
    return link.map((link, index) => {
      return (
        <a key={index} href={link} className="resume-social-media-buttons">
          <img src={image[index]} className="resume-social-media-buttons" />
        </a>
      );
    });
  }

  render() {

    return (
      <div>
        {this.makeMedia()}
      </div>
    );
  }
}

export default SocialMediaLinks;

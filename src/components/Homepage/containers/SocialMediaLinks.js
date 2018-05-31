import React, {Component} from 'react';

class SocialMediaLinks extends Component {

  // In this method we map an anchor element (link) with the icon associated inside the anchor. This gives us an icon
  // that can be clicked to go to the associated profile.
  makeMedia(link, image) {
    return link.map((link, index) => {
      return (
        <a key={index} href={link} className="resume-social-media-buttons">
          <img src={image[index]} className="resume-social-media-buttons" />
        </a>
      );
    });
  }

  render() {

    const { data } = this.props;
    const link = data.pictureAndInfoBox.externalURLs;
    const image = data.pictureAndInfoBox.externalURLImages;

    return (
      <div className="resume-social-media-parent">
        {this.makeMedia(link, image)}
      </div>
    );
  }
}

export default SocialMediaLinks;

import React, { Component } from 'react';

export default class GoogleSlideshow extends Component {
  
  render() {
    
    return (
      <div>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR-VuJhKM_gz93R1YGHbWiMxa2H_jO1i_QZHgyv7w3pPP1EEYfEo792VkEj72Lq9etB2nG67iGsq64V/embed?start=true&loop=true&delayms=3000"
                className="about-google-slideshow" frameborder="0" allowfullscreen="true" mozallowfullscreen="true"
                webkitallowfullscreen="true"/>
      </div>
    );
    
  }
}

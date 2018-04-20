import React, { Component } from 'react';
import './style.css'; //TODO: delete

export default class About extends Component {
  
  render() {
    
    const { aboutData } = this.props;
    
    return (
      <div>
        <div className="about-highest-parent">
          <h1>{aboutData.headerText}</h1>
          <p>{aboutData.bodyText}</p>
        </div>
      </div>
    );
    
  }
}

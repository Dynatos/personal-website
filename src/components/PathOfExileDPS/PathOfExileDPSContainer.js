import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import LargeTextInputForm from './LargeTextInputForm';

export default class PathOfExileDPSContainer extends Component {
  
  render() {
    
    return (
      <div>
        <NavBar />
        <div className="poe-how-to-highest-parent">
          <h2>How to use</h2>
          <span>Hover over an item in game and press control/command + c to get usable item data</span>
        </div>
        <div className="poe-input-output-parent">
          <LargeTextInputForm />
        </div>
      </div>
    );
    
  }
}

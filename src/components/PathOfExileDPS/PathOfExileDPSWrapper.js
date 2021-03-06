import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import LargeTextInputForm from './LargeTextInputForm';
import ItemDPSDisplay from "./ItemDPSDisplay";

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
          <LargeTextInputForm calculatePOEDPS={this.props.calculatePOEDPS}/>
          <ItemDPSDisplay propsFromState={this.props}/>
        </div>
      </div>
    );
    
  }
}

PathOfExileDPSContainer.propTypes = {
  calculatePOEDPS: PropTypes.func.isRequired
};

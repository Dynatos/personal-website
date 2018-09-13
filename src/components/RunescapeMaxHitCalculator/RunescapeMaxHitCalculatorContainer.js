import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserInputForm from "./UserInputForm";

export default class RunescapeMaxHitCalculatorContainer extends Component {
  
  render() {
    
    return (
      <div className="osrs-max-hit-wrapper" >
        <NavBar />
        <UserInputForm />
        <div className="osrs-max-hit-display-wrapper">
          <img className="osrs-damage-splat" src="../../static/htmlcssimages/images/RunescapeMaxHitTool/damage_splat.png"/>
          <div id="osrs-max-hit-output" className="osrs-max-hit-output" value="1" style={{
            position: 'absolute',
            top: '9px',
            left: '14px'
          }}>
            1
          </div>
        </div>
      </div>
    );
  }
}

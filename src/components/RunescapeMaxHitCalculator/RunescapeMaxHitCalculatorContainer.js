import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserInputForm from "./UserInputForm";


export default class RunescapeMaxHitCalculatorContainer extends Component {
  
  render() {
    
    return (
      <div>
        <NavBar />
        <UserInputForm />
        <div id="osrs-max-hit-output" />
      </div>
    );
  }
}

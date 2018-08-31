import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UserInputForm from "./UserInputForm";
import EquipmentSelector from "./EquipmentSelector";


export default class RunescapeMaxHitCalculatorContainer extends Component {
  
  render() {
    
    return (
      <div>
        <NavBar />
        <UserInputForm />
        <EquipmentSelector />
        <div id="osrs-max-hit-output" />
      </div>
    );
  }
}

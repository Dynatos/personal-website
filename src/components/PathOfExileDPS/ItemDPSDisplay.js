import React, { Component } from 'react';

const getAllElementalDPSInOneString = function getAllElementalDPSInOneString(arr) {
  if (!arr || arr === []) {
    return 0;
  }
  let returnString = '';
  for (let i = 0; i < arr.length; i++) {
    returnString = returnString.concat(arr[i].toString());
    if (i >= arr.length - 1) {
      return returnString;
    }
    returnString = returnString.concat(', ');
  }
};

const getTotalDPS = function getTotalDPS(arrayOfDPSNumbers) {
  let counter = 0;
  if (arrayOfDPSNumbers === []) {
    return;
  }
  for (let i = 0; i < arrayOfDPSNumbers.length; i++) {
    counter += arrayOfDPSNumbers[i];
  }
  return counter;
};

export default class ItemDPSDisplay extends Component {
  
  render() {
    
    let { physical, elemental, chaos } = this.props.propsFromState;
    let arrayOfDPSNumbers = [elemental[0], elemental[1], elemental[2], physical, chaos];
    
    return (
      <div>
        <div className="poe-item-display poe-item-display-physical">
          Physical DPS: {physical}
        </div>
        <div className="poe-item-display poe-item-display-elemental">
          Elemental DPS: {getAllElementalDPSInOneString(elemental)}
        </div>
        <div className="poe-item-display poe-item-display-chaos">
          Chaos DPS: {chaos}
        </div>
        <div className="poe-item-display poe-item-display-total">
          Total DPS: {getTotalDPS(arrayOfDPSNumbers)}
        </div>
      </div>
    );
    
  }
}

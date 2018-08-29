import React, { Component } from 'react';
const allItemData = require('runescape_item_stat_data.json');

const itemNameArray = Object.keys(allItemData);

// function getItemNamesContainingInputText() {
//   const outputElement = document.querySelector('#EquipmentSelect');
//   const valueContainingElement = document.querySelector('#EquipmentToEquip');
//
//   itemNameArray.forEach(function cb(itemName) {
//
//   });
// }
//
// function confirmEquip() {
//
// }

export default class EquipmentSelector extends Component {
  
  render() {
    
    // return (
    //   <div>
    //     <form>
    //       <select id="EquipmentSelect" type="text" placeholder="Item Name" onInput={getItemNamesContainingInputText}>
    //         <option value="None">None</option>
    //       </select>
    //       <button onClick={confirmEquip}>Equip</button>
    //     </form>
    //   </div>
    // );
  }
}

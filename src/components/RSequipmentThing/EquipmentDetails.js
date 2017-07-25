import React, {Component} from 'react';
import EquipmentSlotBox from './EquipmentSlotBox';




class IconAndCheckbox extends Component {

  renderSlotBoxes() {
    let filteredItems = this.props.filteredItemsByEquipSlot;
    let slotTitles = Object.keys(filteredItems);
// this function takes the filteredItems and creates an array with all the key names of filteredItems and call it slotTitles
// we then take that array of "slotTitles" and return an EquipmentSlotBox call for each of the slotTitles
// each EquipmentSlotBox needs a unique key, which we have made equal to slotTitle.
// we also gave each call the props that EquipmentSlotBox will need to render properly
// the map returns the EquipmentSlotBox and the renderSlotBoxes call returns all of the EquipmentSlotBoxes that were returned
    return slotTitles.map((slotTitle) => {
      return <EquipmentSlotBox slotTitle={slotTitle} topItemsForSlot={filteredItems[slotTitle]} key={slotTitle}/>;
    });
  }


  render() {
    return (
      <div className="equipment--big-box head-text">
        Equipment details
        {this.renderSlotBoxes()}
      </div>
    );
  }
}

export default IconAndCheckbox;
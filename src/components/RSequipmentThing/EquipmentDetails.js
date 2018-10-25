import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EquipmentSlotBox from './EquipmentSlotBox';

class IconAndCheckbox extends Component {

  renderSlotBoxes() {
    let { filteredItemsByEquipSlot } = this.props;
    let slotTitles = Object.keys(filteredItemsByEquipSlot);
// This function takes the filteredItems and creates an array with all the key names of filteredItems and call it
// slotTitles we then take that array of "slotTitles" and return an EquipmentSlotBox call for each of the slotTitles
// each EquipmentSlotBox needs a unique key, which we have made equal to slotTitle. We also gave each call the props
// that EquipmentSlotBox will need to render properly the map returns the EquipmentSlotBox and the renderSlotBoxes
// call returns all of the EquipmentSlotBoxes that were returned
    return slotTitles.map((slotTitle) => {
      return <EquipmentSlotBox slotTitle={slotTitle}
                               topItemsForSlot={filteredItemsByEquipSlot[slotTitle]}
                               key={slotTitle}
      />;
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

IconAndCheckbox.propTypes = {
  filteredItemsByEquipSlot: PropTypes.object.isRequired
};

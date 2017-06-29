import React, {Component} from 'react';
import EquipmentItems from "./EquipmentItems";


class EquipmentSlotBox extends Component {

  render() {


// this sets the values of the variables slotTitle and topItemsForSlot to be equal to this.props.slotTitle and
// this.props.topItemsForSlot
    let {slotTitle, topItemsForSlot} = this.props;


// here we return an Equipment Deatils box that contains data only related to it's slotTitle ("head", "cape", etc)
// the first set of divs contain the image and set the css on the parents. The EquipmentItems calls give us our
// four boxes containing items, including item name and the associated image. The right item is determined in the main
// component that links this module to the FinalStats module, as we need to have the stats in both components.
    return (
        <div className={slotTitle + " equipment--slot-boxes"}>
          <div className="equipment--slot-names">
            <div className="equipment--slot-text text">
              <img src={require('../../static/htmlcssimages/images/icons/equipscreen/' + slotTitle + '.png')} />
            </div>
          </div>
          <EquipmentItems topItems={topItemsForSlot[0]}/>
          <EquipmentItems topItems={topItemsForSlot[1]}/>
          <EquipmentItems topItems={topItemsForSlot[2]}/>
          <EquipmentItems finalColumn="true" topItems={topItemsForSlot[3]}/>
        </div>
    );
  }
}

export default EquipmentSlotBox;

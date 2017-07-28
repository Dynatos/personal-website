import React, {Component} from 'react';
import EquipmentItems from "./EquipmentItems";

// this function returns an array from 0 to whatever value is given as the argument.
function equipmentItemBoxNumberArrayMaker(value) {
  let numberOfEquipmentBoxesToMap = [];
  for (let i = 0; i < value; i++) {
    numberOfEquipmentBoxesToMap[i] =  i;
  }
  console.log("number of equipment boxes to render: " + numberOfEquipmentBoxesToMap);
  return numberOfEquipmentBoxesToMap;
}

let equipmentItemsMapArray = equipmentItemBoxNumberArrayMaker(4);



class EquipmentSlotBox extends Component {

  equipmentItemsMapCallback(currentValue) {

  return <EquipmentItems topItems={this.props.topItemsForSlot[currentValue]} uniqueClassNumber={currentValue} key={currentValue}/>;
}

  render() {

// this sets the values of the variables slotTitle and topItemsForSlot to be equal to this.props.slotTitle and
// this.props.topItemsForSlot
    let {slotTitle} = this.props;

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
          {equipmentItemsMapArray.map((e) => this.equipmentItemsMapCallback(e), this)}
        </div>
    );
  }
}

export default EquipmentSlotBox;

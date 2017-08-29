// This is a complex module so I will have a full explanation of its functionality here:
// SlotTitles is how the different equipment details boxes are differentiated, it is used in the followup function
// called getTopItemsForSlots. That function is called in the render function as it's value is maintained by topItemsObject
// whose value is handed down as a prop into EquipmentDetails and FinalStats, the reason for this is explained in the
// respective modules. The value of topItemsForSlots is an object with 10 keys (each a slotTitles string) and the value
// of each key is 4 objects indexed 0-3. These objects contain all the info for each piece of gear, including name, id,
// stats, etc. These items are sorted in the sorterWithLessSpaghetti javascript file, and filtered here.
//
// We also handle the toggling click of each checkbox in here. We set a state for each checkbox on click and the value
// is either set to true or false, depending on the current state (state is set to opposite of current state)

import React, {Component} from 'react';
import DesiredStats from './DesiredStats';
import EquipmentDetails from './EquipmentDetails';
import FinalStats from './FinalStats';
require('../../static/htmlcssimages/style.css');
import NavBar from '../NavBar/NavBar';
import getDesiredStatsFromState from '../../../scripts/sorterWithLessSpaghetti';
import {getBackground, removeBackground} from '../../../scripts/backgroundColor';

// These are the "type" associated with each equip slot in the JSON file
export const slotTitles = ["head", "cape", "neck", "weapon", "body", "shield", "legs", "hands", "feet", "ring"];

// This function takes in the sortedItems array and a number (this number is used to determine how many items will be
// sliced), and returns an object with key names equal to slotTitles, and with values of those key names being equal to
// objects containing all the data of the highest scored item objects indexed 0+. This function is called in multiple
// places with multiple different numbers desired because 4 are needed to fill Equipment Details and only the top 1 is
// needed for the final stats calculation
function getTopItemsForSlots(sortedItems, numberToSlice) {
  // TopItemsForSlots gets filled with keys equal to slotTitles and the values of each key are the top 4 items filtered
  let topItemsForSlots = {};
  for (let i=0; i<slotTitles.length; i++) {
    let slotTitle = slotTitles[i];
    let topItemsForSlot = sortedItems.filter((item) => item.type === slotTitle).slice(0, numberToSlice);
    topItemsForSlots[slotTitle] = topItemsForSlot;
  }
  return topItemsForSlots;
}

class RunescapeStatTool extends Component {

  // This is used to set the background color of the page when this component is mounted
  componentDidMount() {
    getBackground();
  }

  // This is used to set the background color of the page when this component is dismounted
  componentWillUnmount() {
    removeBackground();
  }

  // This is where we dispatch our toggleStat action from. When a checkbox is clicked, it calls this function, which in
  // turn calls our dispatchable action to update the store
  handleToggleClick(statName) {
    this.props.toggleStat(statName);
  }

  render() {
    // This const is equal to the state object of the runescape app, which we hand down to several other components so
    // that our app can use current state to render up to date images/data
    const {statNameToggleValues} = this.props;

    // This variable's value is equal to an array, in order, of each item listed from best to work based on the current
    // desired stats (current checked checkboxes)
    let sortedItems = getDesiredStatsFromState(statNameToggleValues);
    function sliceTopItems(numberToSlice) {
      return getTopItemsForSlots(sortedItems, numberToSlice);
    }

    // This is the highest parent div of the whole app. This is where we call all the main components and take in/pass down
    // our state, props, and where we handle taking in the handleClick call
    return (
      <div>
        <NavBar />
        <div className="highest-parent">
          <div className="user-and-final-parent">
            <DesiredStats handleClick={(statName) => this.handleToggleClick(statName)}
                          checkedAllStatStates={statNameToggleValues} />
            <FinalStats checkedAllStatStates={statNameToggleValues} topItemsForSlots={sliceTopItems(1)} />
          </div>
          <EquipmentDetails sortedItems={sortedItems} filteredItemsByEquipSlot={sliceTopItems(4)} />
        </div>
      </div>
    );
  }
}

export default RunescapeStatTool;

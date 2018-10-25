import React, { Component } from 'react';
import IconAndCheckbox from './IconAndCheckbox';
import statProps, { topRow, midRow, botRow } from './statProps';

class DesiredStats extends Component {

// This function takes in a unique statName (statToRender), then defines variables with names equal to the required keys
// from statProps, and assigns the values to be equal to the value of the same key in statProps
// (eg: attackStab returns {attackStyle: "stab",statCategory: "attack",statName: "attackStab"})
// The return statement starts with a spread operator, which defines "this.props.x = x" or in this case defines:
// this.props.statProp = statProps[statToRender], which is equal to the object on line 10.
// Next, we define our handleClick as a callback to RunescapeGearSuggestor's handleClick prop (which is a call to a
// function that is defined in its call to this component). We hand it the required arguments for it to set the state.
// Next we set the checked prop to equal true or false based on the current stat's state (checkedAllStatStates[statName])
// Finally, we define a key as a unique value (statName), this is so React can differentiate between all of the
// checkboxes and update properly. This is a requirement to make the React work
  renderStat(statToRender) {
    let statProp = statProps[statToRender];
    let statName = statProp.statName;
    return (
      <IconAndCheckbox {...statProp} handleClick={() => this.props.handleClick(statName)}
                       checked={this.props.checkedAllStatStates[statName]} key={statName} />
    );
  }

// The only really noteworthy/confusing part of the return statement is the map. We call a map of the the desired
// array of elements (which is defined in statProps.js) and the renderStat function as the callback
// That map will return one IconAndCheckbox component per item in the mapped array
  render() {
    return (
      <div className="user-choice-parent head-text">
        Check for desired stats

        <div className="user-choice-div-child user-choice-div-child-top-box">
          <div className="user-choice-category">
            Offensive
          </div>
          <div className="user-choice-top-row">
            {topRow.map(this.renderStat, this)}
          </div>
        </div>

        <div className="user-choice-div-child">
          <div className="user-choice-category">
            Defensive
          </div>
          <div className="user-choice-top-row">
            {midRow.map(this.renderStat, this)}
          </div>
        </div>

        <div className="user-choice-div-child">
          <div className="user-choice-category">
            Bonus
          </div>
          <div className="user-choice-top-row">
            {botRow.map(this.renderStat, this)}
          </div>
        </div>

      </div>
    );
  }
}

export default DesiredStats;

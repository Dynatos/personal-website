// This is a complex javascipt file, so I will go through how it gets used here and define the in-depth purpose of
// thing directly above/within the code below. getDesiredStatsFromState is exported and is the only code called outside.
// This code begins by being called in RunescapeGearSuggestor as the value of the sortedItems variable. The call to
// getDesiredStatsFromState is given the argument (this.state) which calls that function here. That function calls
// getArrayOfDesireStats with the state, which returns only the true values in an array. getDesiredStatsFromState then
// returns the result of sortIfStatIsChecked with the argument of the previously returned array of desired stats.
// sortIfStatIsChecked calls a sort on Items (.json). The sort function takes two items and runs getItemScore on them,
// the way this works is the desired stats are handed to the getItemScore function, it takes the value of the desired
// stats, adds the values to a "score", and finally returns the score to itemSorterCategories. These 2 scores are then
// compared and the higher score is placed in a higher priority, and in the end the list is returned in order from
// highest total desired stats to lowest total desired stats. This gets returned to getDesiredStatsFromState, which
// returns that list to the initial call in RunescapeGearSuggestor, where it is assigned as the value of sortedItems.

import Items from '../src/components/RSequipmentThing/json-data-searcher/items-with-stats';
import statProps from '../src/components/RSequipmentThing/statProps';


// this function will get called in the main parent that holds the state of all checkboxes, so that it can calculate
// based on the current state of the checked checkboxes. This function gets called every time a box is toggled on/off.
export default function getDesiredStatsFromState(stateOfStats) {
  // gets returned arrayOfDesiredStatObjects
  let desiredStats = getArrayOfDesireStats(stateOfStats);
  return sortIfStatIsChecked(desiredStats);
}

// this function gets run in getDesiredStatsStatPropsObjects so this should end with a return statement handing data back
// the goal of this function is to take in state from ^ and return all the "true" (all the checked checkboxes) in an array
function getArrayOfDesireStats(stateOfDesiredStats) {
  let keys = Object.keys(stateOfDesiredStats);
  let arrayOfDesiredStatObjects = [];
  for (let i = 0; i < keys.length; i++) {
    if (stateOfDesiredStats[keys[i]]) {
      arrayOfDesiredStatObjects.push(keys[i]);
    }
  }
  return arrayOfDesiredStatObjects;
}

// this function returns an array of sorted items based on desiredStats, or returns an empty array if there are no desiredStats
function sortIfStatIsChecked(desiredStats) {
  if (desiredStats.length > 0) {
    return Items.sort(itemSorterCategories.bind(null, desiredStats)).reverse();
  }
  return [];
}

// this function is called with desiredStats (known as statNames to this function) and is called with a sort function.
// this sort automatically hands in a and b (which are just 2 of the items in Items (.json)). These items are scored
// in the getItemScore function, which returns a number equal to the total of all the desired stats of that item.
// The stats of both items are compared and then a value is returned based on their compared value.
function itemSorterCategories(statNames, a, b) {
  let itemA = getItemScore(statNames, a);
  let itemB = getItemScore(statNames, b);

  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }
  return 0;
}

// this function takes statNames (which are the names of the stats associated with the checked checkboxes), and takes
// in an item. The stats that are desired (aka statNames) are the only stats that get added up to the final score.
// This score is then returned.
function getItemScore(statNames, item) {
  let score = 0;
  for (let i = 0; i < statNames.length; i++) {
    let category = statNames[i];
    let statProp = statProps[category];
    score += item.stats[statProp.statCategory][statProp.attackStyle];
  }
  return score;
}

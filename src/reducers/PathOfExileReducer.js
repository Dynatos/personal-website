import constants from '../constants/constants';

const { calculatePoeDPS } = constants;
const physicalDamageRegEx = /Physical Damage: (\d{1,4})-(\d{1,4})/;
const elementalDamageRegEx = /Elemental Damage: (\d{1,4})-(\d{1,4})( \(augmented\))?(, (\d{1,4})-(\d{1,4}) \(augmented\))?(, (\d{1,4})-(\d{1,4}) \(augmented\))?/;
const chaosDamageRegEx = /Chaos Damage: (\d{1,4})-(\d{1,4})/;
const attacksPerSecondRegEx = /Attacks per Second: (\d{1,3}.\d{2,2})/;
const defaultState = {
  physical: 0,
  elemental: [0, 0, 0],
  chaos: 0
};

function getDataFromRegex(regex, data) {
  // spread operator won't work if regex finds no matches, so we return an empty array if regex equates to false
  const regexData = [...(regex.exec(data) || [])];
  // splice to remove first property returned by regex, which is the string that was operated on
  return regexData.splice(1);
}

// calculates average damage per hit and multiples that by attacks per second to get average damage per second
// returns 0 if min or max damage equate to false
function getDamagePerSecond(minStr, maxStr, aps) {

  const min = parseInt(minStr);
  const max = parseInt(maxStr);

  if (!min || !max) {
    return 0;
  }
  return Math.round(((min + max) / 2) * aps);
}

// returns an object containing data extracted from user's item data
export function getDamageData(itemData) {

  return {
    physicalDamage: getDataFromRegex(physicalDamageRegEx, itemData),
    elementalDamage: getDataFromRegex(elementalDamageRegEx, itemData),
    chaosDamage: getDataFromRegex(chaosDamageRegEx, itemData),
    attacksPerSecond: getDataFromRegex(attacksPerSecondRegEx, itemData)
  };
}

export default function calculateDPS(state = defaultState, action, itemDataForTest = false) {
  
  if (action.type !== calculatePoeDPS) {
    return state;
  }

  const damageData = getDamageData(action.itemData); // get damage data with user's item data
  const { physicalDamage, elementalDamage, chaosDamage, attacksPerSecond } = damageData; // assign values to variables
  const physicalDPS = getDamagePerSecond(physicalDamage[0], physicalDamage[1], attacksPerSecond); //calculate dps
  const elementalDPS = [
    getDamagePerSecond(elementalDamage[0], elementalDamage[1], attacksPerSecond),
    getDamagePerSecond(elementalDamage[4], elementalDamage[5], attacksPerSecond),
    getDamagePerSecond(elementalDamage[7], elementalDamage[8], attacksPerSecond)
  ]; //calculate dps
  const chaosDPS = getDamagePerSecond(chaosDamage[0], chaosDamage[1], attacksPerSecond); //calculate dps
  
  // for tape tests TODO: figure out how to integrate with Redux actions
  if (state === null && action === null && itemDataForTest) {
    return {
      physical: physicalDPS,
      elemental: elementalDPS,
      chaos: chaosDPS
    };
  }

  return {
    ...state,
    physical: physicalDPS,
    elemental: elementalDPS,
    chaos: chaosDPS
  };
}

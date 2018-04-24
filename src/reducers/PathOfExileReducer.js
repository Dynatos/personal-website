import constants from '../constants/constants';

const physicalDamageRegEx = /Physical Damage: (\d{1,4})-(\d{1,4})/;
const elementalDamageRegEx = /Elemental Damage: (\d{1,4})-(\d{1,4})/;
const chaosDamageRegEx = /Chaos Damage: (\d{1,4})-(\d{1,4})/;
const attacksPerSecondRegEx = /Attacks per Second: (\d{1,3}.\d{2,2})/;

const { calculatePoeDPS } = constants;

export function getDamageData(itemData) {

  const physicalDamageDataArray = [...physicalDamageRegEx.exec(itemData)];

  return {
    physicalDamage: physicalDamageDataArray.splice(1),
    elementalDamage: elementalDamageRegEx.splice(1),
    chaosDamageRegEx: chaosDamageRegEx.splice(1),
    attacksPerSecondRegEx: attacksPerSecondRegEx.splice(1)
  };
}

export default function calculateDPS(itemData) {

  return {

  };
}

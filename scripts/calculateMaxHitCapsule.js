export default function calculateMaxHit(e) {
  if (e) {e.preventDefault();} //stop form submission from refreshing page
  
  const strLvl      = parseInt(document.querySelector('#osrs-strength').value) || 1;
  const prayer      =          document.querySelector('#osrs-prayer').value;
  const strBoost    =          document.querySelector('#osrs-boost').value;
  const stance      =          document.querySelector('#osrs-stance').value;
  const voidBonus   =          document.querySelector('#osrs-voidKnight').value;
  const other       =          document.querySelector('#osrs-other').value;
  const strFromGear = parseInt(document.querySelector('#osrs-equipment-strength-bonus').value) || 0;
  const combatType  =          document.querySelector('#osrs-other-combat-type').value;
  
  const outPutParent = document.querySelector('#osrs-max-hit-output');
  const img = document.querySelector('.osrs-damage-splat');
  
  // Order of operations is critical here, these steps are in a particular order to match the game's logic exactly
  
  const strLvlInStats = applyStrengthBuff(strLvl, strBoost);
  const strAfterPrayer = applyPrayer(strLvlInStats, prayer);
  const strAfterStance = strAfterPrayer + getStanceBonus(stance);
  const strAfterAddEight = strAfterStance + 8; // not 100% sure on this but the forums say yes
  const effectiveStrLvl = getVoidBonus(strAfterAddEight, voidBonus); // final value for this sequence
  
  const maxHitBeforeOther = calculateMaxHitWithEffectiveLevelAndGearBonus(effectiveStrLvl, strFromGear);
  
  const maxHit = getMaxHitAfterOtherEquipmentMultiplier(maxHitBeforeOther, other, combatType);
  const maxHitStringLength = maxHit.toString().length;
  
  //TODO get str bonus from gear using gear data
  
  outPutParent.innerText = maxHit || 'Error';
  
  if (maxHitStringLength === 1) {
    outPutParent.style.position = 'absolute';
    outPutParent.style.top = '9px';
    outPutParent.style.left = '14px';
  
    img.style.display = 'initial';
  }
  if (maxHitStringLength === 2) {
    outPutParent.style.position = 'absolute';
    outPutParent.style.top = '9px';
    outPutParent.style.left = '10px';
  
    img.style.display = 'initial';
  }
  if (maxHitStringLength >= 3) {
    img.style.display = 'none';
  }
  
  if (!maxHit || outPutParent.innerText === 'Error') {
    img.style.display = 'none';
  }
}

export function checkDharoks(e) {
  if (e) {e.preventDefault();}
  
  const inputValue = document.querySelector('#osrs-boost').value;
  const missingHealth = document.querySelector('#osrs-missing-health');
  const missingHealthLabel = document.querySelector('#osrs-missing-health-label');
  
  if (inputValue === "dharoks_set") {
    missingHealth.style = "display: default";
    missingHealthLabel.style = "display: default";
    return;
  }
  if (inputValue !== "dharoks_set") {
    missingHealth.style = 'display: none';
    missingHealthLabel.style = 'display: none';
  }
}

export function checkDragonBattleaxe(e) {
  if (e) {e.preventDefault();}
  
  const inputValue = document.querySelector('#osrs-boost').value;
  const attack = document.querySelector('#osrs-attack');
  const attackLabel = document.querySelector('#osrs-attack-label');
  const defence = document.querySelector('#osrs-defence');
  const defenceLabel = document.querySelector('#osrs-defence-label');
  const range = document.querySelector('#osrs-range');
  const rangeLabel = document.querySelector('#osrs-range-label');
  const magic = document.querySelector('#osrs-magic');
  const magicLabel = document.querySelector('#osrs-magic-label');
  
  if (inputValue === "dragon_battleaxe") {
    attack.style = "display: default";
    attackLabel.style = "display: default";
    defence.style = "display: default";
    defenceLabel.style = "display: default";
    range.style = "display: default";
    rangeLabel.style = "display: default";
    magic.style = "display: default";
    magicLabel.style = "display: default";
    return;
  }
  if (inputValue !== "dragon_battleaxe") {
    attack.style = "display: none";
    attackLabel.style = "display: none";
    defence.style = "display: none";
    defenceLabel.style = "display: none";
    range.style = "display: none";
    rangeLabel.style = "display: none";
    magic.style = "display: none";
    magicLabel.style = "display: none";
  }
}

export function checkMeleeOrRange(e) {
  if (e) {e.preventDefault();}
  
  const combatType = document.querySelector('#osrs-other-combat-type');
  const combatTypeLabel = document.querySelector('#osrs-other-combat-type-label');
  const other      = document.querySelector('#osrs-other').value;
  
  if (other === 'false') {
    combatType.style = 'display: none';
    combatTypeLabel.style = 'display: none';
  }
  
  else {
    combatType.style = 'display: default';
    combatTypeLabel.style = 'display: default';
  }
}

//export function getSearchText() {
//  return document.querySelector('#RunescapeMaxHitGearSearchBar').value;
//}

export function setStrengthValueFromEquipment(strengthValue) {
  const strengthBonusElement = document.querySelector('#osrs-equipment-strength-bonus');
  
  strengthBonusElement.value = (strengthBonusElement.value || 0) + strengthValue;
}

function applyStrengthBuff(strLevel, boostType) {
  if (boostType === 'false') {
    return strLevel;
  }
  const missingHealth = document.querySelector('#osrs-missing-health').value;
  
  const strBoostObject = {
    strength_potion: function() {
      return Math.floor((strLevel * 1.10) + 3);
    },
    super_strength_potion: function() {
      return Math.floor((strLevel * 1.15) + 5);
    },
    combat_potion: function() {
      return Math.floor((strLevel * 1.10) + 3);
    },
    zamorak_brew: function() {
      return Math.floor((strLevel * 1.12) + 2);
    },
    dharoks_set: function() {
      const strBoost = '1' + missingHealth.toString();
      return Math.floor(strLevel * parseInt(strBoost));
    },
    dragon_battleaxe: function() {
      const attack = document.querySelector('#osrs-attack').value;
      const defence = document.querySelector('#osrs-defence').value;
      const range = document.querySelector('#osrs-range').value;
      const magic = document.querySelector('#osrs-magic').value;
      return Math.floor(strLevel + 10 + ((0.1 * attack) + (0.1 * defence) + (0.1 * range) + (0.1 * magic) / 4));
    }
  };
  
  return strBoostObject[boostType]();
  
}

function applyPrayer(strLvl, prayer) {
  if (prayer === 'false') {
    return strLvl;
  }
  
  const strBoostObject = {
    burst_of_strength: function() {
      return Math.floor(strLvl * 1.05);
    },
    sharp_eye: function() {
      return Math.floor(strLvl * 1.05);
    },
    superhuman_strength: function() {
      return Math.floor(strLvl * 1.10);
    },
    hawk_eye: function() {
      return Math.floor(strLvl * 1.10);
    },
    ultimate_strength: function() {
      return Math.floor(strLvl * 1.15);
    },
    eagle_eye: function() {
      return Math.floor(strLvl * 1.15);
    },
    chivalry: function() {
      return Math.floor(strLvl * 1.85);
    },
    piety: function() {
      return Math.floor(strLvl * 1.23);
    },
    rigour: function() {
      return Math.floor(strLvl * 1.23);
    }
  };
  
  return strBoostObject[prayer]();
}

function getStanceBonus(stance) {
  return (stance === 'accurate' || stance === 'aggressive') ? 3 : (stance === 'controlled') ? 1 : 0;
}

function getVoidBonus(str, voidBonus) {
  if (voidBonus === 'false') {
    return str;
  }
  
  return Math.floor(
    (voidBonus === 'melee' || voidBonus === 'range')
    ? (str * 1.1)
    : (voidBonus === 'elite_range')
    ? (str * 1.125)
    : str);
}

function calculateMaxHitWithEffectiveLevelAndGearBonus(effectiveLevel, gearBonus) {
  return Math.floor(0.5 + effectiveLevel * (gearBonus + 64) / 640);
}

function getMaxHitAfterOtherEquipmentMultiplier(str, otherEquipment, combatType) {
  if (otherEquipment === 'false') {
    return str;
  }
  
  if (combatType === 'melee') {
    return Math.floor(
      (otherEquipment === 'black_mask' || otherEquipment === 'black_mask_(i)' || otherEquipment === 'salve_amulet')
      ? (str * 7/6) //if above is true return this
      : (otherEquipment === 'salve_amulet_(e)' || otherEquipment === 'salve_amulet_(ei)')
      ? (str * 1.2)//if above is true return this
      : str//else return this
    );
  }
  
  if (combatType === 'range') {
    return Math.floor(
      (otherEquipment === 'black_mask_(i)' || otherEquipment === 'salve_amulet_(i)')
        ? (str * 1.15) //if above is true return this
        : (otherEquipment === 'salve_amulet_(ei)')
        ? (str * 1.2)//if above is true return this
        : str//else return this
    );
  }
}

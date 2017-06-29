export const topRow = ["attackStab", "attackSlash", "attackCrush", "attackMagic", "attackRange"];

export const midRow = ["defenceStab", "defenceSlash", "defenceCrush", "defenceMagic", "defenceRange"];

export const botRow = ["bonusStrength", "bonusRangeStrength", "bonusMagicStrength", "bonusPrayer"];

const statProps = {

  attackStab: {
    attackStyle: "stab",
    statCategory: "attack",
    statName: "attackStab"
  },
  attackSlash: {
    attackStyle: "slash",
    statCategory: "attack",
    statName: "attackSlash"
  },
  attackCrush: {
    attackStyle: "crush",
    statCategory: "attack",
    statName: "attackCrush"
  },
  attackMagic: {
    attackStyle: "magic",
    statCategory: "attack",
    statName: "attackMagic"
  },
  attackRange: {
    attackStyle: "range",
    statCategory: "attack",
    statName: "attackRange"
  },

  defenceStab: {
    attackStyle: "stab",
    statCategory: "defence",
    statName: "defenceStab"
  },
  defenceSlash: {
    attackStyle: "slash",
    statCategory: "defence",
    statName: "defenceSlash"
  },
  defenceCrush: {
    attackStyle: "crush",
    statCategory: "defence",
    statName: "defenceCrush"
  },
  defenceMagic: {
    attackStyle: "magic",
    statCategory: "defence",
    statName: "defenceMagic"
  },
  defenceRange: {
    attackStyle: "range",
    statCategory: "defence",
    statName: "defenceRange"
  },

  bonusStrength: {
    attackStyle: "strength",
    statCategory: "bonus",
    statName: "bonusStrength"
  },
  bonusRangeStrength: {
    attackStyle: "range_strength",
    statCategory: "bonus",
    statName: "bonusRangeStrength"
  },
  bonusMagicStrength: {
    attackStyle: "magic_strength",
    statCategory: "bonus",
    statName: "bonusMagicStrength"
  },
  bonusPrayer: {
    attackStyle: "prayer",
    statCategory: "bonus",
    statName: "bonusPrayer"
  }
};

export default statProps;

import toggleStatConstants from '../constants/toggle-stat';

const {toggleStatValue} = toggleStatConstants;

const defaultState = {
  attackCrush: false,
  attackMagic: false,
  attackRange: false,
  attackSlash: false,
  attackStab: false,
  bonusMagicStrength: false,
  bonusPrayer: false,
  bonusRangeStrength: false,
  bonusStrength: false,
  defenceCrush: false,
  defenceMagic: false,
  defenceRange: false,
  defenceSlash: false,
  defenceStab: false
};

const toggleStatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case toggleStatValue:

      return {
        ...state,
        [action.stat]: !state[action.stat]
      };
    default:
      return state;
  }
};

export default toggleStatReducer;

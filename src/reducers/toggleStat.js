import Constants from '../constants/constants';

const { toggleStatValue } = Constants;

//here we set the default state of the runescape app, this is possibly redundant, but there isn't really a reason not
//to have it, and not having it could cause issues in the future if anything changes.
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

//here is the reducing function. It is called with the current state and an action, and if that action is toggleStatValue
//then it returns an updated version of the state. This is done by assigning the current state to an object, and then
//toggling the stat assigned to the action object.
const toggleStatReducer = function toggleStatReducerFunction(state = defaultState, action) {
  switch (action.type) { //a switch is only used here because the Redux documentation example uses one, an if statement is also fine
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

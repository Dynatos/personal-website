import Constants from '../constants/constants';

const { pushPeriod, calculateOperation, resetButton, numberInput, setOperator } = Constants;

const defaultState = {
  equation: '',
  periodSet: false,
  operatorSet: false,
  negativeSet: false,
  lastInputOperator: false,
  blockNegatives: false
};

const calculateTotal = (equationString) => {
  return eval(equationString);
};

function pushNumber (initial, pushNum) {
  return (initial + pushNum);
}

const calculatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case numberInput:
      if (state.operatorSet) {
        return {
          ...state,
          equation: pushNumber(state.equation, action.operand),
          lastInputOperator: false,
          blockNegatives: true
        };
      }
      return {
        ...state,
        equation: pushNumber(state.equation, action.operand),
        lastInputOperator: false
      };
    case pushPeriod:
      if (state.periodSet) {
        return {
          ...state
        };
      }
      if (!state.periodSet) {
        return {
          ...state,
          equation: pushNumber(state.equation, '.'),
          periodSet: true,
          lastInputOperator: false
        };
      }
      return {
        ...state
      };
    case setOperator:
      if (state.equation === '-' || state.equation === '- ' || action.operatorValue === '/' && state.equation.length === 0
          || action.operatorValue === '*' && state.equation.length === 0 || action.operatorValue === '+' && state.equation.length === 0) {
        return {
          ...state
        };
      }
      if (action.operatorValue === '-' && !state.blockNegatives && !state.operatorSet && state.equation.length !== 0
          && state.equation !== '-' && state.equation !== '.') {
        return {
          ...state,
          equation: pushNumber(state.equation, action.operatorValue + " "),
          periodSet: false,
          lastInputOperator: true,
          operatorSet: true,
          negativeSet: false,
          blockNegatives: false
        };
      }
      if (action.operatorValue === '-' && state.equation.length === 0 && !state.negativeSet || action.operatorValue === '-'
          && state.lastInputOperator && !state.negativeSet) {
        return {
          ...state,
          equation: pushNumber(state.equation, action.operatorValue + " "),
          lastInputOperator: false,
          negativeSet: true,
          blockNegatives: true
        };
      }
      if (!state.operatorSet && action.operatorValue === '-' && state.equation.length > 0 && state.equation !== '.'
          && state.equation !== '-' && !state.negativeSet) {
        return {
          ...state,
          equation: pushNumber(state.equation, action.operatorValue + " "),
          periodSet: false,
          lastInputOperator: true,
          operatorSet: true,
          negativeSet: false,
          blockNegatives: false
        };
      }
      if (!state.operatorSet && state.equation !== '.' && state.equation !== '0' && state.equation !== '-'
          && action.operatorValue !== '-') {
        return {
          ...state,
          equation: pushNumber(state.equation, action.operatorValue + " "),
          periodSet: false,
          lastInputOperator: true,
          operatorSet: true,
          negativeSet: false,
          blockNegatives: false
        };
      }
      if (state.equation.length !== 0 && !state.operatorSet && state.negativeSet && !state.operatorSet) {
        return {
          ...state,
          equation: pushNumber(state.equation, action.operatorValue + " "),
          periodSet: false,
          lastInputOperator: true,
          operatorSet: true,
          negativeSet: false,
          blockNegatives: false
        };
      }
      return {
        ...state
      };
    case calculateOperation:
      if (state.equation.length < 3) {
        return {
          ...state
        };
      }
      return {
        ...state,
        equation: calculateTotal(state.equation),
        periodSet: false,
        operatorSet: false,
        negativeSet: false,
        lastInputOperator: false,
        blockNegatives: false
      };
    case resetButton:
      return {
        ...defaultState
      };
    default:
      return state;
  }
};

export default calculatorReducer;

import Constants from '../constants/constants';

const { pushFirstOperand, pushSecondOperand, setOperator, calculateOperation, resetButton } = Constants;

const defaultState = {
  firstOperandSet: false,
  firstOperand: 0,
  secondOperand: 0,
  operator: '+',
  total: 0,
  reset: false
};

export const pushFirst = (state = defaultState, action) => {
  switch (action.type) {
    case pushFirstOperand:
      return {
        ...state,
        firstOperand: action.operand
      };
    default:
      return state;
  }
};

export const pushSecond = (state = defaultState, action) => {
  switch (action.type) {
    case pushSecondOperand:
      return {
        ...state,
        secondOperand: action.operand
      };
    default:
      return state;
  }
};

export const operator = (state = defaultState, action) => {
  switch (action.type) {
    case setOperator:
      return {
        ...state,
        firstOperandSet: true,
        operator: action.operator
      };
    default:
      return state;
  }
};

export const calculate = (state = defaultState, action) => {
  switch (action.type) {
    case calculateOperation:
      if (state.operator === '+') {
        state.total = state.firstOperand + state.secondOperand;
      }
      if (state.operator === '-') {
        state.total = state.firstOperand - state.secondOperand;
      }
      if (state.operator === '/') {
        state.total = state.firstOperand / state.secondOperand;
      }
      if (state.operator === '*') {
        state.total = state.firstOperand * state.secondOperand;
      }
      return {
        ...state,
        firstOperandSet: true,
        firstOperand: state.total
      };
    default:
      return state;
  }
};

export const reset = (state = defaultState, action) => {
  switch (action.type) {
    case resetButton:
      return {
        ...state,
        firstOperandSet: false,
        firstOperand: 0,
        secondOperand: 0,
        operator: '+',
        reset: false
      };
    default:
      return state;
  }
};

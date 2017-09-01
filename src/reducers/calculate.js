import Constants from '../constants/constants';

const { pushFirstOperand, pushSecondOperand, pushPeriod, setOperator, calculateOperation, resetButton } = Constants;

const defaultState = {
  firstOperandSet: false,
  firstOperand: "",
  secondOperand: "",
  operator: '',
  periodSet: false,
  displayOne: true
};

const calculateTotal = (numOne, numTwo, operator) => {
  let num1 = Number(numOne);
  let num2 = Number(numTwo);
  let finalNum;
  if (operator === '+') {
    finalNum = num1 + num2;
  }
  if (operator === '-') {
    finalNum = num1 - num2;
  }
  if (operator === '/') {
    finalNum = num1 / num2;
  }
  if (operator === '*') {
    finalNum = num1 * num2;
  }
  return finalNum.toString();
};

function numConcat(initialNum, concatNum) {
  let finalNum = initialNum.concat(concatNum);
  if (finalNum.length <= 12) {
    return finalNum;
  }
  if (finalNum.length > 12) {
    return finalNum.slice(0, 12);
  }
}

const calculatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case pushFirstOperand:
      if (action.firstOperandSet) {
        return {
          ...state,
          firstOperand: state.firstOperand
        };
      }
      return {
        ...state,
        firstOperand: numConcat(state.firstOperand, action.operand)
      };
    case pushSecondOperand:
      return {
        ...state,
        secondOperand: numConcat(state.secondOperand, action.operand)
      };
    case pushPeriod:
      if (state.periodSet) {
        return {
          ...state
        };
      }
      if (!state.periodSet && !state.firstOperandSet) {
        return {
          ...state,
          firstOperand: numConcat(state.firstOperand, "."),
          periodSet: true
        };
      }
      if (!state.periodSet && state.firstOperandSet) {
        return {
          ...state,
          secondOperand: numConcat(state.secondOperand, "."),
          periodSet: true
        };
      }
      return {
        ...state
      };
    case setOperator:
      if (state.operator.length === 0 && state.firstOperand.length > 0) {
        return {
          ...state,
          firstOperandSet: true,
          operator: action.operatorValue,
          periodSet: false,
          displayOne: false
        };
      }
      if (state.operator.length === 1 && state.firstOperand.length > 0 && state.secondOperand.length > 0) {
        return {
          ...state,
          firstOperand: calculateTotal(state.firstOperand, state.secondOperand, state.operator),
          firstOperandSet: true,
          secondOperand: "",
          operator: action.operatorValue,
          periodSet: false
        };
      }
      return {
        ...state
      };
    case calculateOperation:
      if (state.firstOperand.length > 0 && state.secondOperand.length > 0 && state.operator.length > 0) {
        return {
          ...state,
          firstOperand: calculateTotal(state.firstOperand, state.secondOperand, state.operator),
          firstOperandSet: true,
          secondOperand: "",
          operator: '',
          periodSet: false,
          displayOne: true
        };
      }
      return {
        ...state
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

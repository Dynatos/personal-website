import Constants from '../constants/constants';

const { pushFirstOperand, pushSecondOperand, setOperator, calculateOperation, resetButton } = Constants;

const defaultState = {
  firstOperandSet: false,
  firstOperand: 0,
  secondOperand: 0,
  operator: '+'
};

const calculateTotal = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '/') {
    return num1 / num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
};

function numConcat(initialNum, concatNum) {
  let firstNum = initialNum.toString();
  let secondNum = concatNum.toString();
  let finalNum = firstNum.concat(secondNum);
  console.log("length: " + finalNum.length);
  if (finalNum.length <= 12) {
    return (Number(finalNum));
  }
  if (finalNum.length > 12) {
    return Number(finalNum.slice(0, 12));
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
    case setOperator:
      return {
        ...state,
        firstOperandSet: true,
        operator: action.operatorValue
      };
    case calculateOperation:
      return {
        ...state,
        firstOperandSet: false,
        secondOperand: 0,
        firstOperand: calculateTotal(state.firstOperand, state.secondOperand, state.operator)
      };
    case resetButton:
      return {
        ...state,
        firstOperandSet: false,
        firstOperand: 0,
        secondOperand: 0,
        operator: '+'
      };
    default:
      return state;
  }
};

export default calculatorReducer;

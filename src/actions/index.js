import Constants from '../constants/constants';

// Here we import our constants, which are just strings that are immutable. We do this so we can be certain no typos
// are made when calling these strings.
const { addTodoString, setVisibilityFilterValue, toggleTodoValue, deleteTodoValue, toggleStatValue, pushFirstOperand,
  pushSecondOperand, setOperator, calculateOperation, resetButton, pushPeriod } = Constants;

let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: addTodoString,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: setVisibilityFilterValue,
    filter
  };
};

export const toggleTodo = id => {
  return {
    type: toggleTodoValue,
    id
  };
};

export const deleteTodo = id => {
  return {
    type: deleteTodoValue,
    id
  };
};

export const toggleStat = stat => {
  return {
    type: toggleStatValue,
    stat
  };
};

export const firstOperand = (operand, firstOperandSet) => {
  return {
    type: pushFirstOperand,
    operand,
    firstOperandSet
  };
};

export const secondOperand = (operand, firstOperandSet) => {
  return {
    type: pushSecondOperand,
    operand,
    firstOperandSet
  };
};

export const setCalculatorOperator = operatorValue => {
  return {
    type: setOperator,
    operatorValue
  };
};

export const calculateFinalValue = () => {
  return {
    type: calculateOperation
  };
};

export const resetCalculator = () => {
  return {
    type: resetButton
  };
};

export const addPeriod = () => {
  return {
    type: pushPeriod
  };
};

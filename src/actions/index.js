import Constants from '../constants/constants';

// Import constants, useful for immutability
const {
  addTodoString,
  setVisibilityFilterValue,
  toggleTodoValue,
  deleteTodoValue,
  toggleStatValue,
  setOperator,
  calculateOperation,
  resetButton,
  pushPeriod,
  numberInput,
  calculatePoeDPS
} = Constants;

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

export const pushNumber = (operand) => {
  return {
    type: numberInput,
    operand
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

export const calculatePOEDPS = itemData => {
  return {
    type: calculatePoeDPS,
    itemData
  };
};

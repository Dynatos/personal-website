import Constants from '../constants/constants';

// Here we import our constants, which are just strings that are immutable. We do this so we can be certain no typos
// are made when calling these strings.
const { addTodoString, setVisibilityFilterValue, toggleTodoValue, deleteTodoValue, toggleStatValue } = Constants;

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

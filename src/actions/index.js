import toggleStatConstants from '../constants/constants';

const { addTodoString, setVisibilityFilterValue, toggleTodoValue, deleteTodoValue, toggleStatValue } = toggleStatConstants;

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

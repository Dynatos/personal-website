//in this file we have all of our constants saved as object key value pairs. This is for immutability in referencing,
//if you were to hard code the strings you open up room for error.
//these can be imported under any name: "import ANY_NAME from 'PATH';"
// and all desired constants can be referenced with: "const {DESIRED_CONSTANT_KEY} = IMPORTED_VARIABLE_NAME"
//this will result in this syntax: "[IMPORTED_VARIABLE_NAME]" being equal to the string associated with that key.

const constants = {
  toggleStatValue: 'TOGGLE_STAT',
  showAll: 'SHOW_ALL',
  showCompleted: 'SHOW_COMPLETED',
  showActive: 'SHOW_ACTIVE',
  addTodoString: 'ADD_TODO',
  setVisibilityFilterValue: 'SET_VISIBILITY_FILTER',
  toggleTodoValue: 'TOGGLE_TODO',
  deleteTodoValue: 'DELETE_TODO',
  pushFirstOperand: 'PUSH_FIRST_OPERAND',
  pushSecondOperand: 'PUSH_SECOND_OPERAND',
  setOperator: 'SET_OPERATOR',
  calculateOperation: 'CALCULATE_OPERATION',
  resetButton: 'RESET'
};

export default constants;

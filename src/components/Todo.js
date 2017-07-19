import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
  <li
    className="visible-todo"
    onClick={onClick}
    style={{
      backgroundColor: completed ? 'green' : 'red',
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div className="todo-text">
      {text}
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;

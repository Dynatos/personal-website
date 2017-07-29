import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, deleteTodo, deleted }) => (
  <div
    className="visible-todo"
    onClick={onClick}
    style={{
      backgroundColor: completed ? 'green' : 'red',
      textDecoration: completed ? 'line-through' : 'none',
      display: deleted ? 'none' : 'block'
    }}
  >
    <div className="todo-text">
      <button className="todo-delete" onClick={deleteTodo}
      >
        {"x"}
      </button>
      {text}
    </div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;

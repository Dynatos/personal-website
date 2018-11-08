import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="todo-app-highest-parent">
      <form className="add-todo"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button className="submit-button" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
const AddTodoConnected = connect()(AddTodo);

export default AddTodoConnected;

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

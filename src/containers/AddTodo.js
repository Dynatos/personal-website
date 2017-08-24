import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

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
AddTodo = connect()(AddTodo);

export default AddTodo;

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import toggleStatConstants from '../constants/constants';
import TodoList from '../components/TodoList';

const { showAll, showCompleted, showActive } = toggleStatConstants;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case showAll:
      return todos;
    case showCompleted:
      return todos.filter(t => t.completed);
    case showActive:
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

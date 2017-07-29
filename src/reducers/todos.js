const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          deleted: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    case 'DELETE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, deleted: !todo.deleted}
          : todo
      );
    default:
      return state;
  }
};

export default todos;

import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import NavBar from'./NavBar/NavBar';

const App = () => (
  <div>
    <NavBar />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

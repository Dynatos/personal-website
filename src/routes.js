import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/Homepage/HomePage';
import SecondaryPage from './components/Homepage/SecondaryPage';
import RunescapeGearSuggesterContainer from './containers/RunescapeGearSuggestorContainer';
import CalculatorContainer from './containers/CalculatorContainer';
import ArticleHome from './components/Articles/ArticleHome';
import App from './components/App';
import TodoApp from './components/Todo/TodoApp';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="todo" component={TodoApp}/>
    <Route path="runescape" component={RunescapeGearSuggesterContainer}/>
    <Route path="calculator" component={CalculatorContainer}/>
    <Route path="articles" component={ArticleHome}/>
    <Route path="secondary_home" component={SecondaryPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

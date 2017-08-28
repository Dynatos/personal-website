import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './components/HomePage';
import RunescapeGearSuggestorContainer from './containers/RunescapeGearSuggestorContainer';
import App from './components/App';
import TodoApp from './components/TodoApp';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="todo" component={TodoApp}/>
    <Route path="runescape" component={RunescapeGearSuggestorContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

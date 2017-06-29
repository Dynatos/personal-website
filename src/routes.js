import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './components/HomePage';
import RunescapeStatTool from './components/RSequipmentThing/RunescapeGearSuggestor';
import App from './components/App';
import TodoApp from './components/TodoApp';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="todo" component={TodoApp}/>
    <Route path="runescape" component={RunescapeStatTool}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import CameronWrapper from './components/Cameron/CameronWrapper';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CameronWrapper} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

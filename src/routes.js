import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Homepage/HomePage';
import TodoApp from './components/Todo/TodoApp';
import RunescapeGearSuggesterContainer from './containers/RunescapeGearSuggestorContainer';
import CalculatorContainer from './containers/CalculatorContainer';
import ArticleHome from './components/Articles/ArticleHome';
import SecondaryPage from './components/Homepage/SecondaryPage';
import PathOfExileContainer from './containers/PathOfExileContainer';
import NotFoundPage from './components/NotFoundPage';
import CameronWrapper from './components/Cameron/CameronWrapper';
import RunescapeMaxHitCalculatorContainer from './components/RunescapeMaxHitCalculator/RunescapeMaxHitCalculatorContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="todo" component={TodoApp} />
    <Route path="runescape" component={RunescapeGearSuggesterContainer} />
    <Route path="calculator" component={CalculatorContainer} />
    <Route path="articles" component={ArticleHome} />
    <Route path="secondary_home" component={SecondaryPage} />
    <Route path="poe_dps" component={PathOfExileContainer} />
    <Route path="cameron" component={CameronWrapper} />
    <Route path="runescape_max_hit" component={RunescapeMaxHitCalculatorContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import HomePage from './Homepage/HomePage';
import TodoApp from './Todo/TodoApp';
import RunescapeGearSuggesterContainer from './containers/RunescapeGearSuggestorContainer';
import CalculatorContainer from './containers/CalculatorContainer';
import ArticleHome from './Articles/ArticleHome';
import SecondaryPage from './Homepage/SecondaryPage';
import PathOfExileContainer from './containers/PathOfExileContainer';
import NotFoundPage from './NotFoundPage';
import RunescapeMaxHitCalculatorContainer from './RunescapeMaxHitCalculator/RunescapeMaxHitCalculatorContainer';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  
  render() {
    
    //const activeStyle = { color: 'blue' };
    
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/runescape" component={RunescapeGearSuggesterContainer} />
          <Route path="/calculator" component={CalculatorContainer} />
          <Route path="/articles" component={ArticleHome} />
          <Route path="/secondary_home" component={SecondaryPage} />
          <Route path="/poe_dps" component={PathOfExileContainer} />
          <Route path="/runescape_max_hit" component={RunescapeMaxHitCalculatorContainer} />
          <Route path="*" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);

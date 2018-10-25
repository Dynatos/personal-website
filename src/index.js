/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/component_styles/main.css';
import './styles/component_styles/NavBar.css';
import './styles/component_styles/Homepage.css';
import './styles/component_styles/RunescapeGearSuggestor.css';
import './styles/component_styles/RunescapeMaxHit.css';
import './styles/component_styles/PathOfExileDPS.css';
import './styles/component_styles/Calculator.css';
import './styles/component_styles/Todo.css';
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

const appRootDiv = document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  appRootDiv
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      appRootDiv
    );
  });
}

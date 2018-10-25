import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import toggleStat from './toggleStat';
import calculatorReducer from './calculateFix';
import PathOfExileReducer from './PathOfExileReducer';

const rootReducer = combineReducers({
  //routing: routerReducer,
  todos,
  visibilityFilter,
  toggleStat,
  calculatorReducer,
  PathOfExileReducer
});

export default rootReducer;

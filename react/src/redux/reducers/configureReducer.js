import { combineReducers } from 'redux';
import todosReducer  from './todosReducer';
import  alertReducer  from './alertReducer';
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  todosReducer,
  alertReducer,
  filterReducer,
});

export default rootReducer
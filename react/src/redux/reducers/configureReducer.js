import { combineReducers } from 'redux';
import todosReducer  from './todosReducer';
import  alertReducer  from './alertReducer';

const rootReducer = combineReducers({
   todosReducer,
  alertReducer,
});

export default rootReducer
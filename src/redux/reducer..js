import { counterReducer } from './counter/counterReducer';
import { todoReducer } from './todo/todoReducer';

const { combineReducers } = require('redux');

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

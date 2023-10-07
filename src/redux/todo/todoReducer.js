import { todoInitialState } from './todoInitialState';
import { createReducer } from '@reduxjs/toolkit';
import { createTodo } from './actions';

export const todoReducer = createReducer(todoInitialState, {
  [createTodo]: (state, action) => {
    state.todo.push(action.payload);
  },
});

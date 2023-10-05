import { types } from 'redux/constants';
import { todoInitialState } from './todoInitialState';

export const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case types.CREATETODO:
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };
    default:
      return state;
  }
};

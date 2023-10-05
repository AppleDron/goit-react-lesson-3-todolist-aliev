import { types } from 'redux/constants';
import { counterInitialState } from './counterInitialState';

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        total: state.total + state.step,
      };

    case types.DECREMENT:
      return {
        ...state,
        total: state.total - state.step,
      };
    case types.SETSTEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

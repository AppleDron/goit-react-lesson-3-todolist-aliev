import { types } from '../constants';

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const setStep = value => ({
  type: types.SETSTEP,
  payload: value,
});

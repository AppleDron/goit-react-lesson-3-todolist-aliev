import { types } from 'redux/constants';

export const createTodo = todo => ({ type: types.CREATETODO, payload: todo });

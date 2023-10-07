import { createAction, nanoid } from '@reduxjs/toolkit';

export const createTodo = createAction('CREATETODO', value => ({
  payload: { id: nanoid(), title: value, completed: false },
}));

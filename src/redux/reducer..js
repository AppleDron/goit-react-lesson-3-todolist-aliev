import { combineReducers } from 'redux';
import { counterReducer } from './counter/counterSlice';
import { todoReducer } from './todo/todoReducer';
import { newsReducer } from './news/newsReducer';
import { productReducer } from './products/slice';
import { productsAPI } from './products/products.API';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  news: newsReducer,
  products: productReducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  auth: authReducer,
});

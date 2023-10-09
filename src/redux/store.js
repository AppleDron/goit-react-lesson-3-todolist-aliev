import { reducer } from './reducer.';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['counter'],
};

// const customMiddle = state => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') return next(action());
//       return next(action);
//     };
//   };
// };

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [customMiddle],
});
export const persistor = persistStore(store);

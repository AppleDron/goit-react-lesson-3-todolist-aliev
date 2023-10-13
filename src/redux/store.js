import { reducer } from './reducer.';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsAPI } from './products/products.API';

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
  middleware: getDefaulttMiddleware =>
    getDefaulttMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsAPI.middleware),
});
export const persistor = persistStore(store);

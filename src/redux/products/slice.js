import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createProductsThunk,
  deleteProductsThunk,
  getProductsThunk,
} from './thunk';
import {
  handleFulfilled,
  handleFulfilledCreate,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRefactorFunctions,
  handleRejected,
} from './services';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;

    builder
      .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
      .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteProductsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...handleRefactorFunctions(PENDING)), handlePending)
      .addMatcher(isAnyOf(...handleRefactorFunctions(REJECTED)), handleRejected)
      .addMatcher(
        isAnyOf(...handleRefactorFunctions(FULFILLED)),
        handleFulfilled
      );
  },
});

export const productReducer = productsSlice.reducer;

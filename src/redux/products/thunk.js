import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProducts,
  deleteProducts,
  getProducts,
} from 'services/getProducts';

export const getProductsThunk = createAsyncThunk('products/get', () =>
  getProducts()
);

export const createProductsThunk = createAsyncThunk('products/create', data =>
  createProducts(data)
);

export const deleteProductsThunk = createAsyncThunk('products/delete', id =>
  deleteProducts(id)
);

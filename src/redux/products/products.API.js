import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsAPI = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: id => ({ url: `products/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation } = productsAPI;

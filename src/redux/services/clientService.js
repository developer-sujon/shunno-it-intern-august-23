//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const clientService = createApi({
  reducerPath: 'client',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('client'),
  endpoints: (builder) => ({
    clientCreate: builder.mutation({
      query: (postBody) => ({
        url: 'clientCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['client'],
    }),
    clientList: builder.query({
      query: () => ({
        url: 'clientList',
        method: 'GET',
      }),
      providesTags: ['client'],
    }),
    clientPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `clientPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['client'],
    }),
    clientDetails: builder.mutation({
      query: (id) => ({
        url: `clientDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['client'],
    }),
    clientUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `clientUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['client'],
    }),
    clientDelete: builder.mutation({
      query: (id) => ({
        url: `clientDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['client'],
    }),
  }),
});
export const {
  useClientCreateMutation,
  useClientListQuery,
  useClientPaginateQuery,
  useClientDetailsMutation,
  useClientUpdateMutation,
  useClientDeleteMutation,
} = clientService;

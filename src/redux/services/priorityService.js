//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const priorityService = createApi({
  reducerPath: 'priority',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('priority'),
  endpoints: (builder) => ({
    priorityCreate: builder.mutation({
      query: (postBody) => ({
        url: 'priorityCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['priority'],
    }),
    priorityList: builder.query({
      query: () => ({
        url: 'priorityList',
        method: 'GET',
      }),
      providesTags: ['priority'],
    }),
    prioritydropDown: builder.query({
      query: () => ({
        url: 'prioritydropDown',
        method: 'GET',
      }),
      providesTags: ['priority'],
    }),
    priorityPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `priorityPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['priority'],
    }),
    priorityDetails: builder.mutation({
      query: (id) => ({
        url: `priorityDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['Priority'],
    }),
    priorityUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `priorityUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['priority'],
    }),
    priorityDelete: builder.mutation({
      query: (id) => ({
        url: `priorityDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['priority'],
    }),
  }),
});
export const {
  usePriorityCreateMutation,
  usePrioritydropDownQuery,
  usePriorityListQuery,
  usePriorityPaginateQuery,
  usePriorityDetailsMutation,
  usePriorityUpdateMutation,
  usePriorityDeleteMutation,
} = priorityService;

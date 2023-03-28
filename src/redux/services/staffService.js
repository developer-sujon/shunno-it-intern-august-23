//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const staffService = createApi({
  reducerPath: 'staff',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('staff'),
  endpoints: (builder) => ({
    staffCreate: builder.mutation({
      query: (postBody) => ({
        url: 'staffCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['staff'],
    }),
    staffList: builder.query({
      query: () => ({
        url: 'staffList',
        method: 'GET',
      }),
      providesTags: ['staff'],
    }),
    staffPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `staffPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['staff'],
    }),
    staffDetails: builder.mutation({
      query: (id) => ({
        url: `staffDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['staff'],
    }),
    staffUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `staffUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['staff'],
    }),
    staffDelete: builder.mutation({
      query: (id) => ({
        url: `staffDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['staff'],
    }),
  }),
});
export const {
  useStaffCreateMutation,
  useStaffListQuery,
  useStaffPaginateQuery,
  useStaffDetailsMutation,
  useStaffUpdateMutation,
  useStaffDeleteMutation,
} = staffService;

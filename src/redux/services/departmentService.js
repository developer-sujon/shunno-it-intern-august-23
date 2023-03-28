//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const departmentService = createApi({
  reducerPath: 'department',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('department'),
  endpoints: (builder) => ({
    departmentCreate: builder.mutation({
      query: (postBody) => ({
        url: 'departmentCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['department'],
    }),
    departmentList: builder.query({
      query: () => ({
        url: 'departmentList',
        method: 'GET',
      }),
      providesTags: ['department'],
    }),
    departmentdropDown: builder.query({
      query: () => ({
        url: 'departmentdropDown',
        method: 'GET',
      }),
      providesTags: ['department'],
    }),
    departmentPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `departmentPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['department'],
    }),
    departmentDetails: builder.mutation({
      query: (id) => ({
        url: `departmentDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['department'],
    }),
    departmentUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `departmentUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['department'],
    }),
    departmentDelete: builder.mutation({
      query: (id) => ({
        url: `departmentDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['department'],
    }),
  }),
});
export const {
  useDepartmentCreateMutation,
  useDepartmentListQuery,
  useDepartmentdropDownQuery,
  useDepartmentPaginateQuery,
  useDepartmentDetailsMutation,
  useDepartmentUpdateMutation,
  useDepartmentDeleteMutation,
} = departmentService;

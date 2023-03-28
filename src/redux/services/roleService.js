//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const roleService = createApi({
  reducerPath: 'role',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('role'),
  endpoints: (builder) => ({
    roleCreate: builder.mutation({
      query: (postBody) => ({
        url: 'roleCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['role'],
    }),
    roleList: builder.query({
      query: () => ({
        url: 'roleList',
        method: 'GET',
      }),
      providesTags: ['role'],
    }),
    roledropDown: builder.query({
      query: () => ({
        url: 'roledropDown',
        method: 'GET',
      }),
      providesTags: ['role'],
    }),
    rolePaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `rolePaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['role'],
    }),
    roleDetails: builder.mutation({
      query: (id) => ({
        url: `roleDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['role'],
    }),
    roleUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `roleUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['role'],
    }),
    roleDelete: builder.mutation({
      query: (id) => ({
        url: `roleDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['role'],
    }),
  }),
});
export const {
  useRoleCreateMutation,
  useRoleListQuery,
  useRoledropDownQuery,
  useRolePaginateQuery,
  useRoleDetailsMutation,
  useRoleUpdateMutation,
  useRoleDeleteMutation,
} = roleService;

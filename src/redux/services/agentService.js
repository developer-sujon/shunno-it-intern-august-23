//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const agentService = createApi({
  reducerPath: 'agent',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('agent'),
  endpoints: (builder) => ({
    agentCreate: builder.mutation({
      query: (postBody) => ({
        url: 'agentCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['agent'],
    }),
    agentList: builder.query({
      query: () => ({
        url: 'agentList',
        method: 'GET',
      }),
      providesTags: ['agent'],
    }),
    agentdropDown: builder.query({
      query: () => ({
        url: 'agentdropDown',
        method: 'GET',
      }),
      providesTags: ['agent'],
    }),
    agentPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `agentPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['agent'],
    }),
    agentDetails: builder.mutation({
      query: (id) => ({
        url: `agentDetails/${id}`,
        method: 'GET',
      }),
      providesTags: ['agent'],
    }),
    agentUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `agentUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['agent'],
    }),
    agentDelete: builder.mutation({
      query: (id) => ({
        url: `agentDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['agent'],
    }),
  }),
});
export const {
  useAgentCreateMutation,
  useAgentListQuery,
  useAgentdropDownQuery,
  useAgentPaginateQuery,
  useAgentDetailsMutation,
  useAgentUpdateMutation,
  useAgentDeleteMutation,
} = agentService;

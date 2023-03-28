//External Lib Import
import { createApi } from '@reduxjs/toolkit/query/react';

//Internal Lib Import
import basefetchBaseQuery from './baseQuery';

export const ticketService = createApi({
  reducerPath: 'ticket',
  tagTypes: [''],
  baseQuery: basefetchBaseQuery('ticket'),
  endpoints: (builder) => ({
    ticketCreate: builder.mutation({
      query: (postBody) => ({
        url: 'ticketCreate',
        method: 'POST',
        body: postBody,
      }),
      invalidatesTags: ['ticket'],
    }),
    ticketSearch: builder.query({
      query: ({ shunnoID, ticketID }) => ({
        url: `ticketSearch/${shunnoID}/${ticketID}`,
        method: 'GET',
      }),
      invalidatesTags: [''],
    }),
    ticketSingleList: builder.query({
      query: ({ shunnoID, clientApp }) => ({
        url: `ticketSingleList/${shunnoID}/${clientApp}`,
        method: 'GET',
      }),
      invalidatesTags: ['ticket'],
    }),
    ticketReply: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `ticketReply/${id}`,
        method: 'PUT',
        body: postBody,
      }),
      invalidatesTags: [''],
    }),
    ticketList: builder.query({
      query: () => ({
        url: 'ticketList',
        method: 'GET',
      }),
      providesTags: ['ticket'],
    }),
    ticketdropDown: builder.query({
      query: () => ({
        url: 'ticketdropDown',
        method: 'GET',
      }),
      providesTags: ['ticket'],
    }),
    ticketPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `ticketPaginate/${pageNumber + '/' + perPage + '/' + order + '/' + searchKey}`,
        method: 'GET',
      }),
      providesTags: ['ticket'],
    }),
    ticketDetails: builder.query({
      query: ({ shunnoID, ticketID }) => ({
        url: `ticketDetails/${shunnoID}/${ticketID}`,
        method: 'GET',
      }),
      providesTags: ['ticket'],
    }),
    ticketUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `ticketUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),
      invalidatesTags: ['ticket'],
    }),
    ticketDelete: builder.mutation({
      query: (id) => ({
        url: `ticketDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ticket'],
    }),
  }),
});
export const {
  useTicketCreateMutation,
  useTicketReplyMutation,
  useLazyTicketSearchQuery,
  useTicketListQuery,
  useTicketSingleListQuery,
  useTicketdropDownQuery,
  useTicketPaginateQuery,
  useLazyTicketDetailsQuery,
  useTicketUpdateMutation,
  useTicketDeleteMutation,
} = ticketService;

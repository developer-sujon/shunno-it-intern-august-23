//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const ticketService = createApi({
  reducerPath: "ticket",
  tagTypes: ["ticket"],
  baseQuery: basefetchBaseQuery("ticket"),
  endpoints: (builder) => ({
    ticketCreate: builder.mutation({
      query: (postBody) => ({
        url: "ticketCreate",
        method: "POST",
        body: postBody,
      }),
      invalidatesTags: ["ticket"],
    }),
    ticketSearch: builder.query({
      query: ({ shunnoID, ticketID }) => ({
        url: `ticketSearch/${shunnoID}/${ticketID}`,
        method: "GET",
      }),
      providesTags: ["ticket"],
    }),
    ticketSingleList: builder.query({
      query: ({ shunnoID, clientApp }) => ({
        url: `ticketSingleList/${shunnoID}/${clientApp}`,
        method: "GET",
      }),
      providesTags: ["ticket"],
    }),
    ticketReply: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `ticketReply/${id}`,
        method: "PUT",
        body: postBody,
      }),
      providesTags: ["ticket"],
    }),
    ticketList: builder.query({
      query: () => ({
        url: "ticketList",
        method: "GET",
      }),
      invalidatesTags: ["ticket"],
    }),
    ticketdropDown: builder.query({
      query: () => ({
        url: "ticketdropDown",
        method: "GET",
      }),
      invalidatesTags: ["ticket"],
    }),
    ticketPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `ticketPaginate/${
          pageNumber + "/" + perPage + "/" + order + "/" + searchKey
        }`,
        method: "GET",
      }),
      invalidatesTags: ["ticket"],
    }),
    ticketDetails: builder.query({
      query: ({ shunnoID, ticketID }) => ({
        url: `ticketDetails/${shunnoID}/${ticketID}`,
        method: "GET",
      }),
      invalidatesTags: ["ticket"],
    }),
    ticketUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `ticketUpdate/${id}`,
        method: "PATCH",
        body: postBody,
      }),
      invalidatesTags: ["ticket"],
    }),
    ticketDelete: builder.mutation({
      query: (id) => ({
        url: `ticketDelete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ticket"],
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

//External Lib Import
import { createApi } from "@reduxjs/toolkit/query/react";

//Internal Lib Import
import basefetchBaseQuery from "./baseQuery";

export const notificationService = createApi({
  reducerPath: "notification",
  tagTypes: [""],
  baseQuery: basefetchBaseQuery("notification"),
  endpoints: (builder) => ({
    notificationCreate: builder.mutation({
      query: (postBody) => ({
        url: "notificationCreate",
        method: "POST",
        body: postBody,
      }),
      invalidatesTags: ["notification"],
    }),
    notificationList: builder.query({
      query: () => ({
        url: "notificationList",
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
    notificationPaginate: builder.query({
      query: ({ pageNumber, perPage, order, searchKey }) => ({
        url: `notificationPaginate/${
          pageNumber + "/" + perPage + "/" + order + "/" + searchKey
        }`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
    notificationDetails: builder.mutation({
      query: (id) => ({
        url: `notificationDetails/${id}`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
    notificationUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `notificationUpdate/${id}`,
        method: "PATCH",
        body: postBody,
      }),
      invalidatesTags: ["notification"],
    }),
    notificationDelete: builder.mutation({
      query: (id) => ({
        url: `notificationDelete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});
export const {
  useNotificationCreateMutation,
  useNotificationListQuery,
  useNotificationPaginateQuery,
  useNotificationDetailsMutation,
  useNotificationUpdateMutation,
  useNotificationDeleteMutation,
} = notificationService;

//Internal Lib Import
import { apiService } from "../api";
import { userLogin, userLogout } from "../features/auth.reducer";

export const authService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (postBody) => ({
        url: "auth/signup",
        method: "POST",
        body: postBody,
      }),
      onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        queryFulfilled
          .then(({ data }) => {
            dispatch(userLogin(data));
          })
          .catch(() => {
            dispatch(userLogout());
          });
      },
    }),
    login: builder.mutation({
      query: (postBody) => ({
        url: "auth/login",
        method: "POST",
        body: postBody,
      }),
      onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        queryFulfilled
          .then(({ data }) => {
            dispatch(userLogin(data));
          })
          .catch(() => {
            dispatch(userLogout());
          });
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "GET",
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(userLogout());
        } catch (error) {}
      },
    }),
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: `auth/fotgetPassword`,
        method: "POST",
        body: email,
      }),
    }),
    verifyForgetToken: builder.query({
      query: (email, token) => ({
        url: `auth/verifyForgetToken/${email}/${token}`,
        method: "GET",
      }),
    }),
    resetPasswordToken: builder.mutation({
      query: (email, token, postBody) => ({
        url: `auth/resetPasswordToken/${email}/${token}`,
        method: "POST",
        body: postBody,
      }),
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgetPasswordMutation,
  useVerifyForgetTokenQuery,
  useResetPasswordTokenMutation,
} = authService;

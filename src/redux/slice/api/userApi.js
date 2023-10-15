import { api } from "../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
  userLogin: (builder) => ({
    userLogin: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const { useuserSignupMutation, useUserLoginMutation } = userApi;

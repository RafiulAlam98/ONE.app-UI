import { getFromLocalStorage } from "@/helpers/utils/saveData";
import { api } from "../api/apiSlice";
import { authKey } from "@/constants/authKey";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/api/v1/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getAllUser: builder.query({
      query: (token) => ({
        url: `/api/v1/users`,
        method: "GET",
        headers: headers,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useGetAllUserQuery,
} = userApi;

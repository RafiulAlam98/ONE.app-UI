import { getFromLocalStorage } from "@/helpers/utils/saveData";
import { api } from "../api/apiSlice";
import { authKey } from "@/constants/authKey";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const servicesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: `/api/v1/services`,
        method: "GET",
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const { useGetAllServicesQuery } = servicesApi;

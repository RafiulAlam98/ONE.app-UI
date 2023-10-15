import { api } from "../api/apiSlice";

const subCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubCategoryService: builder.query({
      query: () => `/api/v1/sub-services`,
      providesTags: ["subCategoryService"],
    }),
  }),
});
export const { useGetAllSubCategoryServiceQuery } = subCategoryApi;

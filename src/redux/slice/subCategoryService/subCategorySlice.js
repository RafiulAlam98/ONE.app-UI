import { api } from "../api/apiSlice";

const subCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubCategoryService: builder.query({
      query: () => `sub-services`,
      providesTags: ["subCategoryService"],
    }),
  }),
});
export const { useGetAllSubCategoryServiceQuery } = subCategoryApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryApi = createApi({
  reducerPath: "category",
  tagTypes: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: (headers, state) => {
      const reducer = state.getState();
      const token = reducer.authReducer.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      create: builder.mutation({
        query: (name) => {
          return {
            url: "create-category",
            method: "POST",
            body: name,
          };
        },
        invalidatesTags: ["categories"],
      }),
      getCategories: builder.query({
        query: (page) => {
          return {
            url: `/categories/${page}`,
            method: "GET",
          };
        },
        providesTags: ["categories"],
      }),
    };
  },
});

export const { useCreateMutation, useGetCategoriesQuery } = categoryApi;
export default categoryApi;

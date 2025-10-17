import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../BaseApi";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: baseApi,
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: ["Post"],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),

      invalidatesTags: ["Post"],
    }),
  }),
});

export const userApi = userApiSlice;

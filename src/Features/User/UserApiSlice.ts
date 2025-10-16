import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "./UserTypes";

// Define a service using a base URL and expected endpoints
export const userApiSlice = createApi({
  reducerPath: "userApi", // A unique key that will be used by the store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    // You can add headers here, e.g., for authentication
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Post"], // Defines tags for cache invalidation
  endpoints: (builder) => ({
    // GET request to fetch all posts
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      // Provides a tag for this query. The 'Post' tag will be associated with the result.
      providesTags: ["Post"],
    }),
    // GET request to fetch a single post by ID
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    // POST request to create a new post
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      // Invalidates the 'Post' tag, causing the getPosts query to re-fetch
      invalidatesTags: ["Post"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const userApi = userApiSlice;

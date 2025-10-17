import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'mainAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (build) => ({
    getUser: build.query<any, any>({
      query: (token) => ({
        url: `/users/${token}`,
      }),
      transformResponse: (response: any) => response.user,
    }),
    createPilot: build.mutation<any, any>({
      query: (data) => ({
        method: 'POST',
        url: 'users/registration-user',
        body: data,
      }),
    }),
  }),
});

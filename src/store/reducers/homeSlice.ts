import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface HomeSlice {
  user: {};
  controls: {};
  time(): Date;
}

export const usersDataApi = createApi({
  reducerPath: 'api/users',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://60d6d2aa307c300017a5f50c.mockapi.io/api/1' }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend-smart-house-production.up.railway.app/api',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
      keepUnusedDataFor: 300,
    }),
    getOneUser: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetOneUserQuery } = usersDataApi;

const initialState = {
  controls: { temperature: 21.3, light: 83, air: 36 },
  time: '',
  user: {},
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;

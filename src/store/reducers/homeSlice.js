import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import axios from 'axios';
import { BASE_URL } from '../../api/api';

export interface HomeSlice {
  user: {};
  controls: {};
  time(): Date;
}

export const usersDataApi = createApi({
  reducerPath: 'api/users',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://60d6d2aa307c300017a5f50c.mockapi.io/api/1' }),
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
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

// http://api.weatherapi.com/v1/current.json?key=24f30116d20d408b838142612232204&q=Gagra&aqi=no

export const { useGetOneUserQuery } = usersDataApi;

export const getWeatherInfo = createAsyncThunk('home/weather', async () => {
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=24f30116d20d408b838142612232204&q=Haifa&aqi=no`,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  controls: { temperature: 21.3, light: 83, air: 36 },
  outdoorTemperature: '',
  time: '',
  user: {},
  loading: false,
  success: false,
  conditionIcon: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: {
    // Get weather info
    [getWeatherInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getWeatherInfo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.outdoorTemperature = payload.current.temp_c;
      state.conditionIcon = payload.current.condition.icon;
      state.success = true;
    },
    [getWeatherInfo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;

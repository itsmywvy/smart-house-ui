import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { billingAPI } from '../../api/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchChartData = createAsyncThunk('users/fetchChartData', async (thunkAPI) => {
  const response = await billingAPI.getChartData();
  return response;
});

export const fetchHistoryData = createAsyncThunk('users/fetchHistoryData', async (thunkAPI) => {
  const response = await billingAPI.getHistoryData();
  return response;
});

// export const chartDataApi = createApi({
//   reducerPath: 'api/chart',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://60d6d2aa307c300017a5f50c.mockapi.io/api/1' }),
//   endpoints: (build) => ({
//     getChartData: build.query({ query: () => 'billingChart' }),
//   }),
// });

export const historyDataApi = createApi({
  reducerPath: 'api/history',
  tagTypes: ['Invoices'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://60d6d2aa307c300017a5f50c.mockapi.io/api/1' }),
  endpoints: (build) => ({
    getHistoryData: build.query({
      query: () => 'billingHistory',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Invoices', id })),
              { type: 'Invoices', id: 'LIST' },
            ]
          : [{ type: 'Invoices', id: 'LIST' }],
    }),
    payInvoice: build.mutation({
      query(id) {
        const body = { status: true };
        return {
          url: `billingHistory/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: [{ type: 'Invoices', id: 'LIST' }],
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});

// export const { useGetChartDataQuery } = chartDataApi;
export const { useGetHistoryDataQuery, usePayInvoiceMutation } = historyDataApi;

const initialState = {
  invoicingChart: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [],
        backgroundColor: '#EE777F',
        borderColor: '#ee777f',
        tension: 0.5,
        label: '',
        active: true,
      },
      {
        data: [],
        backgroundColor: '#1D2343',
        borderColor: '#1D2343',
        tension: 0.5,
        label: '',
        active: true,
      },
      {
        data: [],
        backgroundColor: '#65bdc0',
        borderColor: '#65bdc0',
        tension: 0.5,
        label: '',
        active: true,
      },
    ],
  },
  tax: 1.849,
  total: null,
  isFetching: {
    chartData: false,
    historyData: false,
  },
  payStatus: '',
  error: {
    chartData: null,
    payInvoice: null,
  },
  currentInvoice: [],
};

export const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {
    getCurrentInvoice(state, { payload }) {
      console.log('s', payload);
      state.currentInvoice.push([...payload.filter((obj) => obj.status)]);
    },
    getTotalBill(state, { payload }) {
      state.total = (payload * state.tax).toFixed(2);
    },
    deleteCurrentInvoice(state, { payload }) {
      state.currentInvoice.filter((item) => item.number !== payload);
    },
    toggleLegendName(state, { payload }) {
      state.invoicingChart.datasets.map((item, index) => {
        if (index === payload) {
          item.active = !item.active;
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.pending, (state) => {
      state.isFetching.chartData = true;
      state.error.chartData = null;
    });

    builder.addCase(fetchChartData.fulfilled, (state, { payload }) => {
      state.invoicingChart.datasets.map((item, i) => {
        item.label = payload[i].label;
        item.data.push(...payload[i].data);
      });
      state.isFetching.chartData = false;
    });

    builder.addCase(fetchChartData.rejected, (state, { payload }) => {
      if (payload) state.error.chartData = payload.message;
      state.isFetching.chartData = false;
    });

    // Pay invoice
    // builder.addCase(updatePayStatus.pending, (state) => {
    //   state.payStatus = 'loading';
    // });
    // builder.addCase(updatePayStatus.fulfilled, (state, { payload }) => {
    //   state.payStatus = 'success';
    //   state.currentInvoice.filter((obj) => payload.data.number !== obj.number);
    // });
    // builder.addCase(updatePayStatus.rejected, (state, { payload }) => {
    //   if (payload) state.error.payInvoice = payload.message;
    //   state.payStatus = 'error';
    // });
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentInvoice, getTotalBill, deleteCurrentInvoice, toggleLegendName } =
  billingSlice.actions;
export default billingSlice.reducer;

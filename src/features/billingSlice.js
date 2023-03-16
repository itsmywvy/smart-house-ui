import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { billingAPI, membersAPI, roomsAPI } from '../api/api';

export const fetchChartData = createAsyncThunk('users/fetchChartData', async (thunkAPI) => {
  const response = await billingAPI.getChartData();
  return response;
});

export const fetchHistoryData = createAsyncThunk('users/fetchHistoryData', async (thunkAPI) => {
  const response = await billingAPI.getHistoryData();
  return response;
});

export const updatePayStatus = createAsyncThunk('users/updatePayStatus', async (id, thunkAPI) => {
  const response = await billingAPI.payInvoice(id);
  return response;
});

const initialState = {
  history: [],
  invoicingChart: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [],
        backgroundColor: '#EE777F',
        borderColor: '#ee777f',
        tension: 0.5,
        label: '',
      },
      {
        data: [],
        backgroundColor: '#1D2343',
        borderColor: '#1D2343',
        tension: 0.5,
        label: '',
      },
      {
        data: [],
        backgroundColor: '#65bdc0',
        borderColor: '#65bdc0',
        tension: 0.5,
        label: '',
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
    historyData: null,
    payInvoice: null,
  },
  currentInvoice: [],
};

export const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {
    getCurrentInvoice(state, { payload }) {
      state.currentInvoice = payload.filter((obj) => obj.status);
    },
    getTotalBill(state, { payload }) {
      state.total = (payload * state.tax).toFixed(2);
    },
  },
  extraReducers: (builder) => {
    // Get Chart Data
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

    // Get History Data
    builder.addCase(fetchHistoryData.pending, (state) => {
      state.isFetching.historyData = true;
      state.error.historyData = null;
    });

    builder.addCase(fetchHistoryData.fulfilled, (state, { payload }) => {
      state.history.push(...payload);
      state.isFetching.historyData = false;
      state.currentInvoice = payload
        .filter((obj) => !obj.status)
        .sort((a, b) => a.number - b.number);
    });

    builder.addCase(fetchHistoryData.rejected, (state, { payload }) => {
      if (payload) state.error.historyData = payload.message;
      state.isFetching.historyData = false;
    });

    // Pay invoice
    builder.addCase(updatePayStatus.pending, (state) => {
      state.payStatus = 'loading';
    });

    builder.addCase(updatePayStatus.fulfilled, (state, { payload }) => {
      state.payStatus = 'success';
      state.currentInvoice.filter((obj) => payload.data.number !== obj.number);
    });

    builder.addCase(updatePayStatus.rejected, (state, { payload }) => {
      if (payload) state.error.payInvoice = payload.message;
      state.payStatus = 'error';
    });
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentInvoice, getTotalBill } = billingSlice.actions;
export default billingSlice.reducer;

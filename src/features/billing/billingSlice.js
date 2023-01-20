import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { billingAPI, membersAPI, roomsAPI } from '../../api/api';

export const fetchChartData = createAsyncThunk('users/fetchChartData', async (thunkAPI) => {
  const response = await billingAPI.getChartData();
  return response;
});

export const fetchHistoryData = createAsyncThunk('users/fetchHistoryData', async (thunkAPI) => {
  const response = await billingAPI.getHistoryData();
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
  options: {
    optionsLine: {
      responsive: false,
      plugins: {
        legend: {
          align: 'end',
          labels: {
            usePointStyle: true,
            font: {
              size: 19,
              family: 'Lack Regular',
            },
            padding: 30,
          },
        },
      },
      elements: {
        line: {
          fill: true,
        },
        point: {
          radius: 0,
        },
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 18,
          bottom: 18,
        },
      },
    },
  },
  tax: 1.849,
  total: null,
  isFetching: false,
  error: '',
};

export const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(fetchChartData.fulfilled, (state, { payload }) => {
      state.invoicingChart.datasets.map((item) => {
        payload.map((obj) => {
          return {
            ...item,
            data: [...obj.data],
            label: obj.label,
          };
        });
      });
    });

    builder.addCase(fetchChartData.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isFetching = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = billingSlice.actions;
export default billingSlice.reducer;

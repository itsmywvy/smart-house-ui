import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statisticsAPI } from '../../api/api';

export const fetchStatistics = createAsyncThunk('statistics/fetch', async (thunkAPI) => {
  const response = await statisticsAPI.getStatisticsData();
  return response;
});

const initialState = {
  electricity: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [],
        backgroundColor: '#EE777F',
        borderColor: '#ee777f',
        tension: 0.5,
      },
    ],
  },
  water: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [],
        backgroundColor: '#65BDC0',
        borderColor: '#65BDC0',
        tension: 0.5,
      },
    ],
  },
  waste: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [68, 32, 34, 66, 74, 55, 67, 39, 68, 79, 64, 57],
        backgroundColor: '#1D2343',
        borderColor: '#1D2343',
        tension: 0.5,
      },
    ],
  },
  sorting: {
    labels: ['Glass', 'Plastic', 'Paper'],
    datasets: [
      {
        label: 'Sorting',
        data: [25, 15, 60],
        backgroundColor: ['#65BDC0', '#1D2343', '#EE777F'],
      },
    ],
  },
  options: {
    optionsLine: {
      responsive: true,
      aspectRatio: 3,
      plugins: {
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 14,
          bottom: 14,
        },
      },
    },
    optionsDoughnut: {
      borderWidth: 0,
      cutout: 25,
      hover: false,
      legend: false,
      responsive: false,
      borderAlign: 'inner',
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            color: 'rgba(29, 35, 67, 0.75)',
            font: {
              size: 17,
            },
          },
        },
      },
    },
  },
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(fetchStatistics.fulfilled, (state, { payload }) => {
      state.electricity.datasets[0].data.splice(0, 15, ...payload);
      state.water.datasets[0].data.splice(0, 15, ...payload);
      state.waste.datasets[0].data.splice(0, 15, ...payload);
    });

    builder.addCase(fetchStatistics.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isFetching = false;
    });
  },
});

export const { setData, setTime } = statisticsSlice.actions;

export default statisticsSlice.reducer;

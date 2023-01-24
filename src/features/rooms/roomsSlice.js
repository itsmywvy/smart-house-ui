import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { membersAPI, roomsAPI } from '../../api/api';

export const fetchRooms = createAsyncThunk('users/fetch', async (thunkAPI) => {
  const response = await roomsAPI.getRoomsData();
  return response;
});

const initialState = {
  isFetching: false,
  error: '',
  data: [],
  temperatureF: 0,
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    convertToFahrenheit: (state, { payload }) => {
      state.temperatureF = Math.ceil((payload * 9) / 5 + 32);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(fetchRooms.fulfilled, (state, { payload }) => {
      state.data.push(...payload);
    });

    builder.addCase(fetchRooms.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isFetching = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { convertToFahrenheit } = roomsSlice.actions;
export default roomsSlice.reducer;

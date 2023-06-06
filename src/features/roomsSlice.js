import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { roomsAPI } from '../api/api';

export const fetchRooms = createAsyncThunk('rooms/fetch', async (thunkAPI) => {
  const response = await roomsAPI.getRoomsData();
  return response;
});

const initialState = {
  isFetching: false,
  error: '',
  data: [],
  temperatureF: 0,
  currentRoom: 'bedroom',
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    convertToFahrenheit(state, { payload }) {
      state.temperatureF = Math.ceil((payload * 9) / 5 + 32);
    },
    changeCurrentRoom(state, { payload }) {
      state.currentRoom = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(fetchRooms.fulfilled, (state, { payload }) => {
      state.data.push(...payload);
      state.isFetching = false;
    });

    builder.addCase(fetchRooms.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.isFetching = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { convertToFahrenheit, changeCurrentRoom } = roomsSlice.actions;
export default roomsSlice.reducer;

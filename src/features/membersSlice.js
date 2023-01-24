import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { membersAPI } from '../api/api';

export const fetchMembers = createAsyncThunk('users/fetch', async (thunkAPI) => {
  const response = await membersAPI.getMembers();
  return response;
});

const initialState = {
  controls: { temperatureOutside: 21.3, light: 83, air: 36 },
  data: [],
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setData: (state, payload) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMembers.fulfilled, (state, { payload }) => {
      state.data.push(...payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { setData } = membersSlice.actions;

export default membersSlice.reducer;

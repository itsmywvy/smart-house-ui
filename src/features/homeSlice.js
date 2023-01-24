import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  controls: { temperature: 21.3, light: 83, air: 36 },
  data: [],
  time: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setData: (state) => {},
    setTime: (state) => {
      state.time = new Intl.DateTimeFormat('en', {
        hour: 'numeric',
        minute: 'numeric',
      })
        .format()
        .toLowerCase();
    },
  },
});

export const { setData, setTime } = homeSlice.actions;

export default homeSlice.reducer;

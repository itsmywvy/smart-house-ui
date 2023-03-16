import { createSlice } from '@reduxjs/toolkit';

export interface HomeSlice {
  controls: {};
  time(): Date;
}

const initialState = {
  controls: { temperature: 21.3, light: 83, air: 36 },
  time: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTime: (state) => {
      state.time = new Date()
        .toLocaleString('en-GB', {
          hour: 'numeric',
          minute: 'numeric',
          hourCycle: 'h12',
        })
        .toLowerCase();
    },
  },
});

export const { setTime } = homeSlice.actions;

export default homeSlice.reducer;

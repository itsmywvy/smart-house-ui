import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem('darkMode')),
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import homeReducer from './features/homeSlice';
import membersReducer from './features/membersSlice';
import roomsReducer from './features/roomsSlice';
import billingReducer from './features/billingSlice';
import statisticsReducer from './features/statisticsSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    members: membersReducer,
    rooms: roomsReducer,
    billing: billingReducer,
    statistics: statisticsReducer,
  },
  middleware: [thunk],
});

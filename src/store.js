import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import homeReducer from './features/home/homeSlice';
import membersReducer from './features/members/membersSlice';
import roomsReducer from './features/rooms/roomsSlice';
import billingReducer from './features/billing/billingSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    members: membersReducer,
    rooms: roomsReducer,
    billing: billingReducer,
  },
  middleware: [thunk],
});

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/homeSlice';
import membersReducer from './reducers/membersSlice';
import roomsReducer from '../features/roomsSlice';
import billingReducer from '../features/billingSlice';
import statisticsReducer from '../features/statisticsSlice';

export const rootReducer = combineReducers({
  home: homeReducer,
  members: membersReducer,
  rooms: roomsReducer,
  billing: billingReducer,
  statistics: statisticsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: [thunk],
  });
};

// Selector
// export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
// Dispatch
// export const useAppDispatch = () => (AppDispatch = useDispatch);

// export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
// export const useAppThunkDispatch = () => (AppThunkDispatch = useDispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

// export default store;

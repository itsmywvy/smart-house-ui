import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer, { usersDataApi } from './reducers/homeSlice';
import membersReducer, { membersDataApi } from './reducers/membersSlice';
import roomsReducer from '../features/roomsSlice';
import billingReducer, { historyDataApi } from '../features/billingSlice';
import statisticsReducer from '../features/statisticsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const rootReducer = combineReducers({
  home: homeReducer,
  members: membersReducer,
  rooms: roomsReducer,
  billing: billingReducer,
  statistics: statisticsReducer,
  // [chartDataApi.reducerPath]: chartDataApi.reducer,
  [historyDataApi.reducerPath]: historyDataApi.reducer,
  [membersDataApi.reducerPath]: membersDataApi.reducer,
  [usersDataApi.reducerPath]: usersDataApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: [thunk],
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        historyDataApi.middleware,
        membersDataApi.middleware,
        usersDataApi.middleware,
      ]),
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

setupListeners(setupStore().dispatch);

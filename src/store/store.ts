import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer, { usersDataApi } from './reducers/homeSlice';
import membersReducer, { membersDataApi } from './reducers/membersSlice';
import roomsReducer from './reducers/roomsSlice';
import billingReducer, { historyDataApi } from './reducers/billingSlice';
import statisticsReducer from './reducers/statisticsSlice';
import authReducer, { authApi } from './reducers/authSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import darkModeReducer from './reducers/darkModeSlice';

export const rootReducer = combineReducers({
  home: homeReducer,
  members: membersReducer,
  rooms: roomsReducer,
  billing: billingReducer,
  statistics: statisticsReducer,
  auth: authReducer,
  darkMode: darkModeReducer,
  // [chartDataApi.reducerPath]: chartDataApi.reducer,
  [historyDataApi.reducerPath]: historyDataApi.reducer,
  [membersDataApi.reducerPath]: membersDataApi.reducer,
  [usersDataApi.reducerPath]: usersDataApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
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
        authApi.middleware,
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

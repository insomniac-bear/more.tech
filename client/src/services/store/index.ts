import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export const index = configureStore({
  reducer: rootReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, emptySplitApi.middleware]),
  preloadedState: undefined,
});

export default store;

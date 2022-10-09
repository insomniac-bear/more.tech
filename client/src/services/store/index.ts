import {
  ActionCreator, AnyAction, configureStore, ThunkAction,
} from '@reduxjs/toolkit';
import { apiService } from '../apiService';
import { rootReducer } from '../slices';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = any> = ActionCreator<
  ThunkAction<ReturnType, RootState, any, AnyAction>
>;

export default store;

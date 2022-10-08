import { combineReducers } from 'redux';
import { apiService } from '../apiService';
import { userSlice } from './userSlice';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [apiService.reducerPath]: apiService.reducer,
});

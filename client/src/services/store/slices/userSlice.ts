import { createSlice } from '@reduxjs/toolkit';
import { TUser, user } from '../../../utils/mockData/userMockData';

type TInitialState = {
  user: TUser;
}

const initialState: TInitialState = {
  user,
};

export const userSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;

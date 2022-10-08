/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  isAuth: false,
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = { ...action.payload };
    },
    clearUser() {
      return initialState;
    },
    setUserAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const {
  setUser,
  clearUser,
  setUserAuth,
} = userSlice.actions;

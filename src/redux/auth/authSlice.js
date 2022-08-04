import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperations';
const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogged: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeLoading(state, { payload }) {
      state.isLoading = payload;
    },
    changeError(state, { payload }) {
      state.error = payload;
    },
  },
  extraReducers: {
    [authOperation.register.pending]: state => {
      state.error = null;
    },
    [authOperation.register.fulfilled]: (state, action) => {
      state.error = null;
      state.isLoading = false;
    },
    [authOperation.register.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'User registration failed'
        : action.payload.message;
    },
    [authOperation.login.pending]: state => {
      state.error = null;
    },
    [authOperation.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [authOperation.login.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'Authorization failed. Please check you email and password.'
        : action.payload.message;
    },
    [authOperation.logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogged = false;
    },
    [authOperation.getCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    // [authOperation.getCurrentUser.fulfilled]: (state, action) => {
    //   state.user = action.payload;
    //   state.isLogged = true;
    //   state.isLoading = false;
    // },
    [authOperation.getCurrentUser.rejected]: state => {
      state.isLoading = false;
    },
  },
});
export const { changeLoading, changeError } = authSlice.actions;
export default authSlice.reducer;

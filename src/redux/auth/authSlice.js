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
      state.isLoading = true;
    },
    [authOperation.register.fulfilled]: (state, action) => {
      state.error = null;
      state.isLoading = false;
    },
    [authOperation.register.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'User registration failed'
        : action.payload.message;
      state.isLoading = false;
    },
    [authOperation.login.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [authOperation.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      state.isLoading = false;
    },
    [authOperation.login.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'Authorization failed.Please check you email and password.'
        : action.payload.message;
      state.isLoading = false;
    },
    [authOperation.loginGoogle.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [authOperation.loginGoogle.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
      state.isLoading = false;
    },
    [authOperation.loginGoogle.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'Authorization failed.'
        : action.payload.message;
      state.isLoading = false;
    },
    [authOperation.logOut.pending]: state => {
      state.isLoading = true;
    },
    [authOperation.logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogged = false;
      state.isLoading = false;
    },
    [authOperation.logOut.rejected]: state => {
      state.isLoading = false;
    },
    [authOperation.getCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    [authOperation.getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isLogged = true;
      state.isLoading = false;
    },
    [authOperation.getCurrentUser.rejected]: state => {
      state.isLoading = false;
      state.isLogged = false;
      state.token = '';
    },
  },
});
export const { changeLoading, changeError } = authSlice.actions;
export default authSlice.reducer;

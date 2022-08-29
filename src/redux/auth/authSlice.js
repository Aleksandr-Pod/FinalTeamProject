import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperations';
const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogged: false,
  isLoading: false,
  error: null,
  isAuthGoogle: null,
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
    logOut(state) {
      state.isLogged = false;
      state.token = null;
      state.user = initialState.user;
    },
  },
  extraReducers: {
    [authOperation.register.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [authOperation.register.fulfilled]: state => {
      state.error = null;
      state.isLoading = false;
    },
    [authOperation.register.rejected]: (state, { payload }) => {
      state.error = !payload.message
        ? 'User registration failed'
        : payload.message;
      state.isLoading = false;
    },
    [authOperation.login.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [authOperation.login.fulfilled]: (state, { payload }) => {
      console.log('login reducer in slice');
      state.user = payload.user;
      state.token = payload.token;
      state.isLogged = true;
      state.isLoading = false;
    },
    [authOperation.login.rejected]: (state, { payload }) => {
      console.log('payload login rejected', payload);
      state.error = payload.message
        ? payload.message
        : 'Authorization failed. Please check you email and password.';
      state.isLoading = false;
    },
    [authOperation.loginGoogle.pending]: state => {
      state.error = null;
      state.isLoading = true;
      state.isAuthGoogle = true;
    },
    [authOperation.loginGoogle.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogged = true;
      state.isLoading = false;
    },
    [authOperation.loginGoogle.rejected]: (state, { payload }) => {
      state.error = !payload.message
        ? 'Authorization failed.'
        : payload.message;
      state.isLoading = false;
      state.isAuthGoogle = false;
    },
    [authOperation.logOut.pending]: state => {
      state.isLoading = true;
    },
    [authOperation.logOut.fulfilled]: state => {
      console.log('logOut fulfilled');
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogged = false;
      state.isLoading = false;
    },
    [authOperation.logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log('logOut rejected payload', payload);
      state.error = payload.message;
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
      state.token = null;
    },
  },
});
export const { changeLoading, changeError, logOut } = authSlice.actions;
export default authSlice.reducer;

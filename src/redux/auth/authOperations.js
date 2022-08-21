import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setTransactions } from '../transactions/transactionSlice';

// axios.defaults.baseURL = 'https://wallet-gls.herokuapp.com/';
axios.defaults.baseURL = 'http://wallet-01.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3030/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/api/users/google-user', credentials);
      token.set(response.data.token);
      dispatch(setTransactions(response.data));
      toast(response.data.message);
      return response.data;
    } catch (err) {
      toast(err.response.data.message);
      return rejectWithValue(err.message);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    console.log('credentials:', credentials);
    try {
      const response = await axios.post(`/api/users/login`, credentials);
      token.set(response.data.token);
      console.log('dispatch allTransactions - response.data:', response.data);
      dispatch(setTransactions(response.data));
      toast(response.data.message);
      return response.data;
    } catch (err) {
      toast(err.response.data.message);
      return rejectWithValue(err.message);
    }
  },
);

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`/api/users/register`, credentials);
      token.set(response.data.data.token);
      toast(response.data.message);
      dispatch(
        login({ email: credentials.email, password: credentials.password }),
      );
      return response.data;
    } catch (err) {
      toast(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await axios.get(`/api/users/logout`);
      token.unset();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const getCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { auth } = getState();
    if (!auth.token) return rejectWithValue();
    token.set(auth.token);
    try {
      const { data } = await axios.get(`/api/users/current`);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const authOperations = {
  register,
  login,
  logOut,
  getCurrentUser,
  loginGoogle,
};

export default authOperations;

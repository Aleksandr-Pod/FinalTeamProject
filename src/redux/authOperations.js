import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import { addData } from './dataSlice';

axios.defaults.baseURL = 'https://wallet-gls.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/register', credentials);
      // token.set(data.token);
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      token.set(response.data.data.token);

      // const dispatch = useDispatch();
      // dispatch(addData(response.data.data.lastTransactions));

      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await axios.get('/api/users/logout');
      token.unset();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const getCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    if (!auth.token) return rejectWithValue();
    token.set(auth.token);
    try {
      const { data } = await axios.get('/users/current');
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
};

export default authOperations;

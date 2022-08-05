import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setTransactions, setBalance } from '../transactions/transactionSlice';

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
      const response = await axios.post('/api/users/register', credentials);
      token.set(response.data.data.token);
      toast(response.data.message);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      token.set(response.data.data.token);
      dispatch(setTransactions(response.data.data));
      dispatch(setBalance(response.data.data.user.balance));
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
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { auth } = getState();
    if (!auth.token) return rejectWithValue();
    token.set(auth.token);
    try {
      const { data } = await axios.get('/api/users/current');
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

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setTransactions } from '../transactions/transactionSlice';
import { prepareIncomeData } from '../../helpers/prepareIncomeData';

axios.defaults.baseURL = 'https://wallet-backend.up.railway.app';
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
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/google-user', credentials);
      token.set(data.data.token);
      toast(data.message);
      return data.data;
    } catch (err) {
      toast(err.response.data.message);
      return rejectWithValue(err.message);
    }
  },
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { getState, rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`/api/users/login`, credentials);
      token.set(response.data.token);
      // sorting data by date
      response.data = prepareIncomeData(response.data);
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
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`/api/users/register`, {
        email,
        password,
      });
      token.set(data.data.token);
      toast(data.message);
      dispatch(login({ email, password }));
      return data;
    } catch (err) {
      toast(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      await axios.get(`/api/users/logout`);
      token.unset();
      // dispatch(resetTransactions());
      // dispatch(resetStats());
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

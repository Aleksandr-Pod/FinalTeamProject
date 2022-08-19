import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { logOut } from '../auth/authSlice';

const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/transactions');
      return response.data.data.lastTransactions;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (credential, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/api/transactions', credential);
      dispatch(getTransactions());
      toast(response.data.message);
      return response.data.data.result;
    } catch (error) {
      // console.log(logOut);
      if (error.response.data.message === 'jwt expired')
        console.log(error.response.data.message);
      // dispatch(logOut());
      return rejectWithValue(error);
    }
  },
);

const transactionsOperations = {
  getTransactions,
  addTransaction,
};

export default transactionsOperations;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { prepareIncomeData } from '../../helpers/prepareIncomeData';

const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/transactions');
      response.data = prepareIncomeData(response.data);
      return response.data;
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
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransactions',
  async (credential, { rejectWithValue, dispatch }) => {
    console.log('credential', credential);
    try {
      const response = await axios.delete('/api/transactions', {
        data: credential,
      });
      dispatch(getTransactions());
      toast(response.data.message);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const transactionsOperations = {
  getTransactions,
  addTransaction,
  deleteTransaction,
};

export default transactionsOperations;

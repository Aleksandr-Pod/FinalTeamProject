import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrency = createAsyncThunk(
  'currency/get',
  async (_, { rejectWithValue }) => {
    try {
      const currencyData = await axios.get('/api/currency');
      return currencyData;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

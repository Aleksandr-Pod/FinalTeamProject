import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-gls.herokuapp.com';

export const fetchCategories = createAsyncThunk(
  'getCategories',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/transactions/categories');
      return data.data.categories;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

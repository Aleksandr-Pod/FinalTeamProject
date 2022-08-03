import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStatistics = createAsyncThunk(
  'getStatistics',
  async ({ month = '7', year = '2022' }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/statistics?month=${month}&year=${year}`,
      );

      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

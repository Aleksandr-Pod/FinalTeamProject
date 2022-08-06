import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const currentMonth = new Date().toISOString().slice(5, 7);
const currentYear = new Date().toISOString().slice(0, 4);

export const fetchStatistics = createAsyncThunk(
  'getStatistics',
  async ({ month = currentMonth, year = currentYear }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/statistics?month=${month}&year=${year}`,
      );
      toast(response.data.message);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

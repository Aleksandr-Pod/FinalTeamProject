import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-gls.herokuapp.com/';

export const fetchCategories = createAsyncThunk(
  'getCategories',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/transactions/categories');
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: {},
  },
  reducers: {
    addCategories(state, { payload }) {
      state.categories = payload;
    },
  },
});
export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

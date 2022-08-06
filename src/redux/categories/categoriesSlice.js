import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesOperations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    income: [],
    expense: [],
    isLoading: false,
  },
  reducers: {
    addCategories(state, { payload }) {
      state.categories = payload;
    },
  },
  extraReducers: {
    [fetchCategories.pending]: state => {
      state.isLoading = true;
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.income = [...payload.income];
      state.expense = [...payload.expense];
      state.isLoading = false;
    },
    [fetchCategories.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

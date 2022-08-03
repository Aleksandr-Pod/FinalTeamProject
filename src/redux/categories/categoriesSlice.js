import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesOperations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    income: [],
    expense: [],
  },
  reducers: {
    addCategories(state, { payload }) {
      state.categories = payload;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.income = [...payload.income];
      state.expense = [...payload.expense];
    },
  },
});

export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

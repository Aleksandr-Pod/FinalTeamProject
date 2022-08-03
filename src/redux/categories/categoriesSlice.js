import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {},
  reducers: {
    addCategories(state, { payload }) {
      state.categories = payload;
    },
  },
});

export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

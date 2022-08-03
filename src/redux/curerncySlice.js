import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    queryDate: null,
  },
  reducers: {
    addCurrencies(state, { payload }) {
      state.currencies = payload;
    },
    addQueryDate(state, { payload }) {
      state.queryDate = payload;
    },
  },
});

export const { addCurrencies, addQueryDate } = currencySlice.actions;
export default currencySlice.reducer;

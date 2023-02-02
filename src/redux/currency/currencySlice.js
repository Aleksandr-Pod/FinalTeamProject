import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './currencyOperations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    queryDate: null,
  },
  extraReducers: {
    [getCurrency.pending]: state => {
      state.isLoading = true;
    },
    [getCurrency.fulfilled]: (state, { payload }) => {
      state.currencies = payload.data;
      state.queryDate = Date.now();
      state.isLoading = false;
    },
    [getCurrency.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default currencySlice.reducer;

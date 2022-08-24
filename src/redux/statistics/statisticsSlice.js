import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistics } from './statisticsOperations';

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    statData: null,
    isLoading: false,
  },
  reducers: {
    addStatistics(state, { payload }) {
      state.statData = payload;
    },
    resetStats(state) {
      state.statData = null;
    },
  },
  extraReducers: {
    [fetchStatistics.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchStatistics.fulfilled]: (state, { payload }) => {
      state.statData = payload;
      state.isLoading = false;
    },
    [fetchStatistics.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { addStatistics, resetStats } = statisticsSlice.actions;
export default statisticsSlice.reducer;

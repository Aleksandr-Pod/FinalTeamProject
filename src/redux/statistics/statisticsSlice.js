import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistics } from './statisticsOperations';

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {},
  reducers: {
    addStatistics(state, { payload }) {
      state.statistics = payload;
    },
  },
  extraReducers: {
    [fetchStatistics.fulfilled]: (state, action) => {
      state.statistics = action.payload;
    },
  },
});

export const { addStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {},
  reducers: {
    addStatistics(state, { payload }) {
      state.statistics = payload;
    },
  },
});

export const { addStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;

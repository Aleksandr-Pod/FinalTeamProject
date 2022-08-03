import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        addData(state, { payload }) { state.push(payload) },
        removeLastData(state){state.shift()}
    }
})
export const { addData, removeLastData } = dataSlice.actions;
export default dataSlice.reducer;
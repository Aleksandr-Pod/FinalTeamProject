import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        addData(state, { payload }){state.push(payload)}
    }
})
export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
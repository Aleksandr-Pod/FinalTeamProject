import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: { name: "", email: "" },
    token: null,
    isLogged: false,
    isLoading: false,
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleLogin (state, {payload}) { state.isLogged = payload },
        addUser(state, {payload}) {
            state.user = payload.user;
            state.token = payload.token
        },
        changeLoading(state, { payload }) { state.isLoading = payload },
        changeError(state, { payload }) { state.error = payload }
    }
})
export const { toggleLogin, addUser, changeLoading, changeError } = authSlice.actions;
export default authSlice.reducer; 
// userSlice.js
import {createSlice}  from '@reduxjs/toolkit';
const initialState = {
  user: {},
  loggedIn:false,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      // state.user = action.payload;
      state.user = { ...state.user, ...action.payload };
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.loggedIn = false;
    },
  },
});


export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

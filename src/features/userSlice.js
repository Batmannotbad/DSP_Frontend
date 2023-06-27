import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, 
  loggedIn: false, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true; 
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false; 
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

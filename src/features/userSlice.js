// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    userId: '', // Add userId field here
    username: '',
    password: '',
    fullname: '',
    email: '',
  },
  reducers: {
    login: (state, action) => {
      const { userId, username, password, fullname, email } = action.payload;
      state.loggedIn = true;
      state.userId = userId; // Update the userId field
      state.username = username;
      state.password = password;
      state.fullname = fullname;
      state.email = email;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userId = '';
      state.username = '';
      state.password = '';
      state.fullname = '';
      state.email = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

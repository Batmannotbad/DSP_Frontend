import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name:"user",//name of the store
    initialState:{ // gias trij khoir taoj
        user:null
    },
    reducers:{
        login: (state,action) =>{// update state
            state.user = action.payload ;// wwhen login use the data in action.payload
        
        },
        logout:(state) => {
            state.user = null;
        },
    },
});

export const {login,logout} = userSlice.actions;

export const selecUser = (state) => state.user.user;

export default userSlice.reducer;
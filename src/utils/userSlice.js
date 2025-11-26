import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUsers: (state, action) => {
      return action.payload; // this change the initial state w/ current user Details
    },
    removeUsers: (state, action) => {
      return null ; // this change curr. state to null 
    },
  },
});
export const { addUsers , removeUsers} = userSlice.actions;
export  default userSlice.reducer;

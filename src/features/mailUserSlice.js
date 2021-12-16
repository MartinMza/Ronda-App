import { createSlice } from "@reduxjs/toolkit";

export const mailUserSlice = createSlice({
  name: "mailUser",
  initialState: {
    mailUser: null,
  },
  reducers: {
    myMailUser: (state, action) => {
      state.mailUser = action.payload;
    },
  },
});

export const { myMailUser} = mailUserSlice.actions;
export const selectMailUser = (state) => state.mailUser.mailUser;
export default mailUserSlice.reducer;
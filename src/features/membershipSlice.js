import { createSlice } from "@reduxjs/toolkit";

export const membershipSlice = createSlice({
  name: "membership",
  initialState: {
    membership: [],
  },
  reducers: {
    myMembership: (state, action) => {
      state.membership = action.payload;
    },
  },
});

export const { myMembership} = membershipSlice.actions;
export const selectMembership = (state) => state.membership.membership;
export default membershipSlice.reducer;

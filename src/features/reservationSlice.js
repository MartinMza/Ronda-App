import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservation: null,
  },
  reducers: {
    myReservation: (state, action) => {
      state.reservation = action.payload;
    },
  },
});

export const { myReservation} = reservationSlice.actions;
export const selectReservation = (state) => state.reservation.reservation;
export default reservationSlice.reducer;

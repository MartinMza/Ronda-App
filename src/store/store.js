
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import reservationReducer from "../features/reservationSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    reservation: reservationReducer,
  },
});


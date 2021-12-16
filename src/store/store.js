
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import reservationReducer from "../features/reservationSlice";
import mailUserReducer from "../features/mailUserSlice";
import membershipReducer from "../features/membershipSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    reservation: reservationReducer,
    mailUser: mailUserReducer,
    membership: membershipReducer
  },
});


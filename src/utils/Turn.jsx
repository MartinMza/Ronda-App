import React from "react";
import { useSelector } from "react-redux";
import { selectReservation } from "../features/reservationSlice";
import { selectUser } from "../features/userSlice";

const reservation = useSelector(selectUser);

reservation.map((items) => {
  [
    {
      day: items.day,
      time: items.time,
      id: items.id,
    },
  ];
});

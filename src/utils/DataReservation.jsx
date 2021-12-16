import React from "react"
import {useSelector} from "react-redux"
import {selectReservation} from "../features/reservationSlice"

export const Campus = [
  { label: "Belgrano", value: "Belgrano" },
  { label: "Recoleta", value: "Recoleta" },
];

export const Room = [
  { label: "Chiquita", value: "Chiquita" },
  { label: "Mediana", value: "Mediana" },
  { label: "Grande", value: "Grande" },
];




export const Person = (prop) => {
  if (prop == "Chiquita") return 4;
  if (prop == "Mediana") return 8;
  if (prop == "Grande") return 16;
};

export const idType = (room, campus) => {
  if (room == "Chiquita" && campus == "Belgrano") return 1;
  if (room == "Chiquita" && campus == "Recoleta") return 4;

  if (room == "Mediana" && campus == "Belgrano") return 2;
  if (room == "Mediana" && campus == "Recoleta") return 5;

  if (room == "Grande" && campus == "Belgrano") return 3;
  if (room == "Grande" && campus == "Recoleta") return 6;
};

export const CampusID = (campus)=>{
  if (campus == "Belgrano") return 1;
  if (campus == "Belgrano") return 2;
}
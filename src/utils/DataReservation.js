export const Campus = [
  { label: "Belgrano", value: "belgrano" },
  { label: "Recoleta", value: "recoleta" },
];

export const Room = [
  { label: "Pequeña", value: "Pequeña" },
  { label: "Mediana", value: "Mediana" },
  { label: "Grande", value: "Grande" },
];

export const Hour = [
  { label: "09:00-10:00", value: "09:00-10:00" },
  { label: "10:00-11:00", value: "10:00-11:00" },
  { label: "11:00-12:00", value: "11:00-12:00" },
  { label: "12:00-13:00", value: "12:00-13:00" },
  { label: "13:00-14:00", value: "13:00-14:00" },
  { label: "14:00-15:00", value: "14:00-15:00" },
  { label: "15:00-16:00", value: "15:00-16:00" },
  { label: "16:00-17:00", value: "16:00-17:00" },
  { label: "17:00-18:00", value: "17:00-18:00" },
  { label: "18:00-19:00", value: "18:00-19:00" },
  { label: "19:00-20:00", value: "19:00-20:00" },
];

export const Day = [
  { label: "Lunes", value: "Lunes" },
  { label: "Martes", value: "Martes" },
  { label: "Miercoles", value: "Miercoles" },
  { label: "Jueves", value: "Jueves" },
  { label: "Viernes", value: "Viernes" },
];

export const Person = (prop) => {
    if(prop == "Pequeña") return 4
    if(prop == "Mediana") return 8
    if(prop == "Grande") return 16
}
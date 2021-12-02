import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../components/button/Button";
import Drop from "../../components/reservation/Drop";
import { Campus, Room, Hour, Day, Person } from "../../utils/DataReservation";
import Gradient from "../../components/gradient/Gradient";

export default function Reserva(props) {
  const { navigation } = props;

  //------------------DATE TIMEPICKER----------------------//
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  //-----------VALUE FOR ROOM-------------//
  const [option, setOption] = useState(false);

  //------------CAMPUS --------------------//
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState(Campus);

  //-----------TYPE OF ROOM----------------//
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [type, setType] = useState(Room);

  //--------------TIME OPTION ---------------------//
  const [dropOpen, setDropOpen] = useState(false);
  const [time, setTime] = useState(null);
  const [turnos, setTurnos] = useState(Hour);

  //--------------DAY OPTION ---------------------//
  const [dayOpen, setDayOpen] = useState(false);
  const [day, setDay] = useState(null);
  const [days, setDays] = useState(Day);

  return (
    <View style={styles.container}>
      <Gradient>
        <Text style={styles.underText}>HACÉ TU RESERVA</Text>
        <View
          style={[
            styles.buttonForReservation,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <TouchableOpacity
            onPress={() => setOption(!option)}
            style={
              option
                ? [
                    styles.buttonOption,
                    { backgroundColor: "#8144CF", width: "100%" },
                  ]
                : [styles.buttonOption, { width: "100%" }]
            }
          >
            <Text style={option ? { color: "#fff" } : null}>
              Sala de reunión
            </Text>
          </TouchableOpacity>
        </View>
        {/* DROPDOWN TO SELECT A CAMPUS */}
        <Drop
          open={open}
          value={value}
          items={sedes}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSedes}
          placeholder="Elige una sede"
          zIndex={3}
        />

        {/* DROPDOWN TO SELECT A CAMPUS */}
        {option ? (
          <Drop
            open={typeOpen}
            value={typeValue}
            items={type}
            setOpen={setTypeOpen}
            setValue={setTypeValue}
            setItems={setType}
            placeholder="Seleccione una sala"
            zIndex={2}
          />
        ) : null}
        {/* PICK A DATE */}
        <View style={[styles.buttonForReservation, { zIndex: 1 }]}>
          <DropDownPicker
            open={dayOpen}
            value={day}
            items={days}
            setOpen={setDayOpen}
            setValue={setDay}
            setItems={setDays}
            placeholder="Dia"
            containerStyle={{
              width: "48%",
              marginRight: 8,
            }}
          />

          <DropDownPicker
            open={dropOpen}
            value={time}
            items={turnos}
            setOpen={setDropOpen}
            setValue={setTime}
            setItems={setTurnos}
            placeholder="Hora"
            containerStyle={{
              width: "50%",
            }}
          />
        </View>

        {typeValue ? (
          <View style={styles.buttonForReservation}>
            <View style={styles.buttonOption}>
              <Text>
                <FontAwesome name="user" size={24} color="black" />
                {"   "}
                {Person(typeValue)}
              </Text>
            </View>
          </View>
        ) : null}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Button>
            <Text style={styles.buttonText}>Reservar</Text>
          </Button>
        </View>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonOption: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 8,
  },
  buttonForReservation: {
    marginHorizontal: 18,
    padding: 10,
    flexDirection: "row",
    //justifyContent: "space-between",
    marginVertical: 5,
  },

  profile: {
    width: "25%",
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  counter: {
    width: "34%",
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 18,
  },
});

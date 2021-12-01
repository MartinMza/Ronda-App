import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import { FontAwesome } from "@expo/vector-icons";
import { selectUser } from "../../features/userSlice";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import HourList from "../../components/HourList/HourList";
import { set } from "react-native-reanimated";

export default function Reserva(props) {
  //---------QUANTITY OF PEOPLE ----------------//
  const [person, setPerson] = useState(1);

  //------------------DATE TIMEPICKER----------------------//
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  //-----------VALUE FOR ROOM-------------//
  const [option, setOption] = useState(false);
  const [optionOne, setOptionOne] = useState(false);
  const { navigation } = props;

  //------------CAMPUS --------------------//
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState([
    { label: "Belgrano", value: "belgrano" },
    { label: "Recoleta", value: "recoleta" },
  ]);

  //-----------TYPE OF ROOM----------------//
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [type, setType] = useState([
    { label: "Chiquita", value: "chiquita" },
    { label: "Mediana", value: "mediana" },
    { label: "Grande", value: "grande" },
  ]);

  //----------------TYPE OF ROOM HANDLE CHANGE-----------------------------//
  const handleChange = () => {
    if (optionOne === false) {
      option ? setOption(false) : setOption(true);
    } else setOptionOne(true);
  };
  const handleChangeOne = () => {
    if (option === false) {
      optionOne ? setOptionOne(false) : setOptionOne(true);
    } else setOption(true);
  };

  //----------------DATEPICKER FUNCTION--------------//

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(selectedDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    //setShow(!show);
  };

  //--------------TIME OPTION ---------------------//
  const [dropOpen, setDropOpen] = useState(false);
  const [time, setTime] = useState(null);
  const [turnos, setTurnos] = useState([
    { label: "9:00-10:00", value: "9:00-10:00" },
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
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.underText}>HACÉ TU RESERVA</Text>
      <View style={styles.buttonForReservation}>
        <TouchableOpacity
          onPress={handleChange}
          style={option ? styles.buttonOptionSelect : styles.buttonOption}
        >
          <Text style={option ? { color: "#fff" } : null}>Sala de reunión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleChangeOne}
          style={optionOne ? styles.buttonOptionSelect : styles.buttonOption}
        >
          <Text style={optionOne ? { color: "#fff" } : null}>
            Puesto individual
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonForCampus}>
        {/* DROPDOWN TO SELECT A CAMPUS */}
        <DropDownPicker
          open={open}
          value={value}
          items={sedes}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSedes}
          placeholder="Elige una sede"
          containerStyle={{
            width: "100%",
          }}
        />
      </View>
      <View style={styles.buttonForRoom}>
        {/* DROPDOWN TO SELECT A CAMPUS */}
        {option ? (
          <DropDownPicker
            open={typeOpen}
            value={typeValue}
            items={type}
            setOpen={setTypeOpen}
            setValue={setTypeValue}
            setItems={setType}
            placeholder="Elige una sala"
            containerStyle={{
              width: "100%",
            }}
          />
        ) : null}
      </View>
      {/* PICK A DATE */}
      <View style={styles.buttonForReservation}>
        <View>
          <View>
            <TouchableOpacity
              onPress={showDatepicker}
              style={styles.buttonOption}
              title="Picker"
            />
          </View>

          {show && (
            <View>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                onChange={onChange}
                display="default"
                minimumDate={new Date(new Date())}
              />
            </View>
          )}
        </View>

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
          onPress={() => {
            if (typeValue === "chiquita") {
              setPerson(2);
            }
            if (typeValue === "mediana") {
              setPerson(5);
            }
            if (typeValue === "grande") {
              setPerson(10);
            }
            if(optionOne){
              setPerson(1)
            }
          }}
        />
      </View>

      <View style={styles.buttonForReservation}>
        <View style={styles.buttonOption}>
          <Text>
            <FontAwesome name="user" size={24} color="black" />
            {"   "}
            {person}
          </Text>
        </View>
        {/* <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => {
              setPerson(person + 1);
            }}
          >
            <Feather name="plus-square" size={24} color="black" />
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 15 }}>{person}</Text>

          <TouchableOpacity
            onPress={() => {
              person > 1 ? setPerson(person - 1) : setPerson(1);
            }}
          >
            <Feather name="minus-square" size={24} color="black" />
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginVertical:50 }}>
        <Button>
          <Text style={styles.buttonText}>Reservar</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    marginVertical:10
  },
  buttonOption: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  buttonOptionSelect: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8144CF",
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
    justifyContent: "space-between",
    zIndex: 1,
    marginVertical:5,
  },
  buttonForRoom: {
    marginHorizontal: 18,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },
  buttonForCampus: {
    marginHorizontal: 18,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 3,
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

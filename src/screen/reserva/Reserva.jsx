import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import Gradient from "../../components/gradient/Gradient";
//import Button from "../../components/button/Button";
import { FontAwesome } from "@expo/vector-icons";
import { selectUser } from "../../features/userSlice";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import HourList from "../../components/HourList/HourList"

export default function Reserva(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const { navigation } = props;

  const user = useSelector(selectUser);
  //
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState([
    { label: "Belgrano", value: "belgrano" },
    { label: "Recoleta", value: "recoleta" },
  ]);
  const [person, setPerson] = useState(1);
  const [type, setType] = useState([
    { label: "Flex", value: "flex" },
    { label: "Premium", value: "premium" },
    { label: "VIP", value: "vip" },
  ]);
  const [option, setOption] = useState(false);
  const [optionOne, setOptionOne] = useState(false);
  const handleChange = () => {
    if(optionOne===false){option ? setOption(false) : setOption(true);}
    else setOptionOne(true)
  };
  const handleChangeOne = () => {
    if(option===false){optionOne ? setOptionOne(false) : setOptionOne(true);}
    else setOption(true)
  };
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
  console.log("soy show", show);

  return (
    <View style={styles.container}>
      <Text style={styles.underText}>HACÉ TU RESERVA</Text>
      <View style={styles.buttonForReservation}>
        <TouchableOpacity
          onPress={handleChange}
          style={option ? styles.buttonOptionSelect : styles.buttonOption}
        >
          <Text>Sala de reunión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleChangeOne}
          style={optionOne ? styles.buttonOptionSelect : styles.buttonOption}
        >
          <Text>Puesto individual</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonForReservation}>
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
          open={open}
          value={value}
          items={sedes}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSedes}
          placeholder="Hora"
          containerStyle={{
            width: "50%",
          }}
        />
            <HourList></HourList>
      </View>
  
      <View style={styles.buttonForReservation}>
        <View style={styles.profile}>
          <Text>
            <FontAwesome name="user" size={24} color="black" />
            {"   "}
            {person}
          </Text>
        </View>
        <View style={styles.counter}>
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
        </View>
      </View>
      {/* <Button>
        <Text style={styles.buttonText}>Reservar</Text>
      </Button> */}
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
  buttonOptionSelect: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    paddingHorizontal: 25,
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 20,
  },
  buttonForReservation: {
    marginHorizontal: 18,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
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

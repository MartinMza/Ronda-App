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

export default function Reserva(props) {
  const { navigation } = props;
  const [val, setVal] = useState(false);
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  const user = useSelector(selectUser);
  //
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState([
    { label: "Belgrano", value: "belgrano" },
    { label: "Recoleta", value: "recoleta" },
  ]);
  const [person, setPerson] = useState(1);

  return (
    <View style={styles.container}>
      <Gradient>
  <View >
        <Text style={styles.underText}>HACÉ TU RESERVA</Text>
        <View style={styles.buttonForReservation}>
          <TouchableOpacity onPress={goToProfile} style={styles.button}>
            <Text>Sala de reunión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToProfile} style={styles.button}>
            <Text>Puesto individual</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonForReservation}>
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
        <View style={styles}>
          <TouchableOpacity style={styles.button}>
            <Text>Fecha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Hora</Text>
          </TouchableOpacity>
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
  button: {
    width: "45%",
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 18,
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
    marginHorizontal: 15,
    padding: 10,
    flexDirection: "row",
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

import axios from "axios";
import React, { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../../../assets/logo.png";
import Gradient from "../../../components/gradient/Gradient";
import Drop from "../../../components/reservation/Drop";
import { localhost } from "../../../localHostIP.json";
import { Campus } from "../../../utils/DataReservation";
import { useSelector } from "react-redux";
import { selectMembership } from "../../../features/membershipSlice";


const AssignMembership = (props) => {
  const { navigation } = props;
  const goToConfirmation = () => {
    navigation.navigate("Confirmation");
  };
  const membership = useSelector(selectMembership)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState(Campus);
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");

console.log(membership)
  const assignMembership = () => {
    axios
      .get(`http://${localhost}/api/admin/${membership}/${organization}`)
      .then(({ }) => alert("Membresia asignada correctamenta"))
      .catch((err) => alert("No se pudo asignar membresia"));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Nombre de la membresia"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Drop
          placeholder="Sedes"
          open={open}
          value={value}
          items={sedes}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSedes}
          zIndex={3}
        />
        <TextInput
          placeholder="Credits"
          style={styles.input}
          value={credits}
          onChangeText={(text) => setCredits(text)}
        />

        <TouchableOpacity onPress={assignMembership} style={styles.button}>
          <Text style={styles.buttonText}>CREAR MEMBRESÍA</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 70,
    marginHorizontal: 70,
    marginTop: 100,
    marginBottom: 60,
  },
  input: {
    width: 333,
    height: 52,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 12,
    marginBottom: 15,
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 243,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    margin: 29,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    //fontFamily: "Lato_Black"
  },
  error: {
    textAlign: "center",
    color: "red",
    fontSize: 13,
  },
});

export default AssignMembership;

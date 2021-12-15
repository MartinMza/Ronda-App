import axios from "axios";
import React from "react";
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
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";

import { localhost } from "../../localHostIP.json";
import { useDispatch } from "react-redux";
import { register } from "../../features/userSlice";

const CreateMembership = (props) => {
  const { navigation } = props
  const goToConfirmation = () => {
    navigation.navigate("Confirmation");
  };

  const formik = useFormik({
    initialValues: initialValuesSchema(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const user = await axios
        .post(`http://${localhost}/api/auth/register/`, data)
        .then(() => {
          dispatch(register(data));
          goToConfirmation();
        });
    },
  });

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Nombre de la membresia"
          style={styles.input}
          value={formik.values.name}
          onChangeText={(text) => formik.setFieldValue("name", text)}
        />
        <TextInput
          placeholder="Lugar"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.location}
          onChangeText={(text) => formik.setFieldValue("email", text)}
        />
        <TextInput
          placeholder="Credits"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.credits}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />

        <Text style={styles.error}>{formik.errors.name}</Text>
        <Text style={styles.error}>{formik.errors.location}</Text>
        <Text style={styles.error}>{formik.errors.credits}</Text>
        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>CREAR MEMBRESIA</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};

function initialValuesSchema() {
  return {
    name: "",
    location: "",
    credits: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().max(50).required("Nombre es requerido"),
    location: Yup.string().max(50).required("El lugar es requerido"),
    credits: Yup.string().max(5).required("Numero de creditos es requerido"),
  };
}
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
    marginTop: 160,
    marginBottom: 60,
  },
  input: {
    width: 300,
    height: 52,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 2,
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

export default CreateMembership;

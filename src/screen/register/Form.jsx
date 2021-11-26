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
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import { useFonts } from "expo-font";
import {localhost} from "../../../localHostIP.json"

const Form = (props) => {
 
  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      company: "",
      profession: "",
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const user = await axios.put(
        `http://localhost:3001/api/user/`,
        data
      )
      .then((user)=>user? goToLogin():alert("Algo anda mal"))
    },
  });

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Phone"
          style={styles.input}
          value={formik.values.phone}
          onChangeText={(text) => formik.setFieldValue("phone", text)}
        />
        <TextInput
          placeholder="Profession"
          style={styles.input}
          value={formik.values.profession}
          onChangeText={(text) => formik.setFieldValue("profession", text)}
        />
        <TextInput
          placeholder="Company"
          style={styles.input}
          value={formik.values.company}
          onChangeText={(text) => formik.setFieldValue("company", text)}
        />

        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={{ fontSize: 18, color: "#fff" }}>Actualizar Información</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={{ fontSize: 18, color: "#fff" }}>Ahora no</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};
function validationSchema() {
  return {
    phone: Yup.string().max(18).required("Phone is required"),
    company: Yup.string(),
    profession: Yup.string(),
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
    marginVertical: 90,
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
    margin: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Form;

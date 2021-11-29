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
import {localhost} from "../../localHostIP.json"
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';


const Register = (props) => {
  const { navigation } = props;

  const goToForm = () => {
    navigation.navigate("Form");
  };

  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  const formik = useFormik({
    initialValues:initialValuesSchema(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const user = await axios.post(
        `http://${localhost}:3001/api/auth/register/`,
        data
      )
      .then(()=>goToForm())
    },
  });

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={formik.values.name}
          onChangeText={(text) => formik.setFieldValue("name", text)}
        />
        <TextInput
          placeholder="Your email"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
        />
      
        <TextInput
          placeholder="Your password"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};

function initialValuesSchema(){
  return {
    name: "",
    email: "",
    password: "",
  };
};

function validationSchema() {
  return {
    name: Yup.string().max(50).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).max(12).required("Password is required"),
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
    margin: 29,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Lato_900Black"
  },
  error: {
    textAlign: "center",
    color: "red",

    fontSize: 13,
  },
});

export default Register;

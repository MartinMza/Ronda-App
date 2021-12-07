import React, { useEffect } from "react";
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
import axios from "axios";

import { localhost } from "../../localHostIP.json";

import { useDispatch } from 'react-redux'
import { login } from "../../features/userSlice"

const Login = (props) => {
  const { navigation } = props;
  const dispatch=useDispatch()

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const user = await axios.post(
        `http://${localhost}/api/auth/login`,
       data
      )
      .then(data=>dispatch(login(data.data))) 
      .then(()=>navigation.navigate("Company"))
      ;
    },
  });


  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
        />
        <Text style={styles.error}>{formik.errors.email}</Text>
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <Text style={styles.error}>{formik.errors.password}</Text>

        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};

function validationSchema() {
  return {
    email: Yup.string().email().required("Email es requerido"),
    password: Yup.string().min(6).max(12).required("Contraseña es requerida"),
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
    marginHorizontal: 68,
    marginTop: 160,
    marginBottom:120
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
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
   // fontFamily: "Lato_900Black",
  },
  textForgot: {
    textAlign: "left",
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 2,
    fontSize: 13,
  },
});
export default Login;

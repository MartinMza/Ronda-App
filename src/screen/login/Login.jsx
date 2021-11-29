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
import axios from "axios";
<<<<<<< HEAD
import {localhost} from "../../localHostIP.json"
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
=======
import {localhost} from "../../../localHostIP.json"
>>>>>>> 9ed6db617a8886dfa5fc57917a5499918d50b1e8

const Login = (props) => {
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
<<<<<<< HEAD
      const user = await axios.post(`http://${localhost}/api/auth/login/`, {email: "andy@gmail.com", password: '123456'})
=======
      const user = await axios.post(`http://localhost:3001/api/auth/login`, data)
>>>>>>> 9ed6db617a8886dfa5fc57917a5499918d50b1e8
      if(user) navigation.navigate("Home")
    },
  });

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="email"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
        />
        <Text style={styles.error}>{formik.errors.email}</Text>
        <TextInput
          placeholder="password"
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
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).max(12).required("Pass is required"),
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
    marginVertical: 100,
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

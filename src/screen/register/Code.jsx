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
import { localhost } from "../../localHostIP.json";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Code = (props) => {
  const { navigation } = props;
  const [token, setToken] = useState("");
  const goToConfirmation = () => {
    navigation.navigate("Confirmation");
  };
  const user = useSelector(selectUser);

  const handleConfirmation = () => {
    axios
      .put(`http://${localhost}/api/auth/verify/${token}`, user.email)
      .then(() => navigation.navigate("Home"))
      .catch(() => alert("Código incorrecto"));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Tu codigo"
          style={styles.input}
          value={token}
          onChangeText={(text) => {
            setToken(text);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
          <Text style={styles.buttonText}>CONFIRMAR</Text>
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
    fontSize: 15,
    //fontFamily: "Lato_Black"
  },
  error: {
    textAlign: "center",
    color: "red",

    fontSize: 13,
  },
});
export default Code;

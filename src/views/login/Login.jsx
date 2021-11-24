import React from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { FaGoogle } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput placeholder="email" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />

      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
        <FaGoogle style={styles.buttonText}/> Log in with Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 411,
    height: 929,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 275,
    height: 98.09,
    marginHorizontal: 68,
    marginVertical: 100,
  },
  input: {
    width: 343,
    height: 52,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 5,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
  },
  button: {
    width: 343,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
export default Login;

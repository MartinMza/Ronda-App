import React from "react";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import logo from "../../../assets/logo.svg";


const Login = () => {
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
      marginVertical: 5,

    },
    input: {
      width: 250,
      height: 40,
      backgroundColor: "white",
      borderRadius: 6,
      marginVertical: 5,
      justifyContent: "center",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput placeholder="email" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />

      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

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
import font from "../../../assets/fonts/Lato-Regular.ttf"


const RegisterWithGoogle = () => {
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
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} />
      <TextInput placeholder="Empresa" style={styles.input} />

      <TouchableOpacity
        onPress={() => alert("Registrado con éxito")}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 50, color: "#fff",fontFamily:font }}>REGISTER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterWithGoogle;

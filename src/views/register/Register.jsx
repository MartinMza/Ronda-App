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



const Register = () => {
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
    button: {
      backgroundColor: "#8144CF",
      width: 247,
      height: 52,
      margin: 20,
      borderRadius: 6,
      
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} />
      <TextInput placeholder="Empresa" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />

      <TouchableOpacity
        onPress={() => alert("Registrado con éxito")}
        style={styles.button}
      >
        <Text style={{ fontSize: 20, color: "#fff"}}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;

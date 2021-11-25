import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";

const Register = () => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
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
    <View style={styles.container}>
      <Gradient>
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
          <Text style={{ fontSize: 20, color: "#fff" }}>Register</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};

export default Register;

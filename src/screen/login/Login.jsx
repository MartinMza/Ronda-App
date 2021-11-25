import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import logo from "../../../assets/logo.png";

const Login = (props) => {
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["purple", "rgba(72, 154, 199, 0.59)"]}
        start={{
          x: 2,
          y: 0.5,
        }}
        style={styles.container}
      >
        <Image source={logo} style={styles.logo} />
        <TextInput placeholder="email" style={styles.input} />
        <TextInput placeholder="password" style={styles.input} />

        <Text style={styles.textForgot}>Forgot Password?</Text>
        <Text alingText={'left'} onPress={goToRegister}>Register</Text>

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
          <Text style={styles.buttonText}>Log in with Google</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 411,
    height: 929,
    left: 0,
    top: 0,
    alignItems: "center",
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
  textForgot: {
    textAlign: "left",
  },
});
export default Login;

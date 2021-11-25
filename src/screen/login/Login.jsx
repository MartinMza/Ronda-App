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
import Gradient from "../../components/gradient/Gradient";

const Login = (props) => {
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput placeholder="email" style={styles.input} />
        <TextInput placeholder="password" style={styles.input} />

        <Text style={styles.textForgot}>Forgot Password?</Text>
        <Text alingText={"left"} onPress={goToRegister}>
          Register
        </Text>

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

import React from "react";
import { Image, Text, SafeAreaView, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";

export default function Start(props) {
  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  const goToGoogle = () => {
    navigation.navigate("Google");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <Button onPress={goToLogin} >
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </Button>
        <Button onPress={goToRegister}>
          <Text style={styles.buttonText} >
            Register
          </Text>
        </Button>
        <Button>
          <Text style={styles.buttonText}>Sign In with Google</Text>
        </Button>
      </Gradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
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
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

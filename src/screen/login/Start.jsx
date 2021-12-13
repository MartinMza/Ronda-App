import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";
import { localhost } from "../../localHostIP.json";

import * as WebBrowser from "expo-web-browser";
import axios from "axios";

export default function Start(props) {
  const { navigation } = props;

  let [result, setResult] = useState(null);

  console.log(props.navigation.setParams);

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToGoogle = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      `http://${localhost}/api/auth/google`
    );
    setResult(result);
  };


  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />

        <Button onPress={goToLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Button>
        <Button onPress={goToRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Button>

        <Button onPress={goToGoogle}>
          <Text style={styles.buttonText}>SIGN IN WITH GOOGLE</Text>
        </Button>
        <Text>{result && JSON.stringify(result)}</Text>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  logo: {
    width: 300,
    height: 70,
    marginHorizontal: 68,
    marginTop: 160,
    marginBottom: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});

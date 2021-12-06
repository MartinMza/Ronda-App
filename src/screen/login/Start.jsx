import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import axios from "axios";
import { useFonts, Lato_900Black } from "@expo-google-fonts/lato";
import { localhost } from "../../localHostIP.json";
import { Linking } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { login, selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigationState } from "@react-navigation/native";

export default function Start(props) {
  const { navigation } = props;

  let [result, setResult] = useState(null);
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });
  console.log(props.navigation.setParams);
  //console.log(props.route);
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

  // useEffect(()=>{
  //   axios.get(`http://${localhost}/api/auth/me`)
  //   .then((data)=>console.log("soy0,",data))
  // },[])

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
    marginBottom:150
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    //fontFamily: "Lato_900Black"
  },
});

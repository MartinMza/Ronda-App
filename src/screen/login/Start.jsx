import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import axios from 'axios'
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';

export default function Start(props) {
  const { navigation } = props;

  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  // const goToGoogle = () => {
  //   axios.get(`http://localhost:3001/api/auth/google`)
  //   .then((user)=> navigation.navigate("Home"))
  //   .catch((error) => console.error(error))
  // };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <Button onPress={goToLogin} >
          <Text style={styles.buttonText}>
            SIGN IN
          </Text>
        </Button>
        <Button onPress={goToRegister}>
          <Text style={styles.buttonText} >
            REGISTER
          </Text>
        </Button>
        {/* <Button onPress={goToGoogle}>
          <Text style={styles.buttonText}>SIGN IN WITH GOOGLE</Text>
        </Button> */}
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
    fontSize: 15,

  },
});

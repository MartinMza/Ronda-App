import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, Linking } from "react-native";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import logo from "../../../assets/logo.png";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import {localhost} from "../../../localHostIP.json"

export default function Confirmation(props) {
    const [token, setToken] = useState("")
  //const { navigation } = props;

// useEffect(()=>{
//     axios.get(`http://${localhost}/api/auth/token`)
//     .then((data)=>setToken(data))
// },[])
console.log(token)

const navigation = useNavigation();

console.log(navigation)


    
  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Revisa tu correo</Text>
        <Text style={styles.subtitle}>
          Te hemos enviado un correo de confirmación.
        </Text>
        <Button onPress={() => Linking.openURL("https://google.com/gmail")}>
          <Text style={styles.buttonText}>Ir a mi email</Text>
        </Button>

      </Gradient>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  logo: {
    width: 300,
    height: 70,
    marginHorizontal: 70,
    marginVertical: 90,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    padding: 25,
    marginBottom: 65,
    color: "#fff",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 22,
   
  },
});

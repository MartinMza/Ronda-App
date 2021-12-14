import React, { useEffect, useState, useRef } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import logo from "../../../assets/logo.png";
import axios from "axios";
import { localhost } from "../../../localHostIP.json";
import * as WebBrowser from "expo-web-browser";
import { selectUser, login } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Confirmation(props) {
  const [code, setCode] = useState("");
  const [codeDos, setCodeDos] = useState("");
  const [codeTres, setCodeTres] = useState("");
  const [codeCuatro, setCodeCuatro] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const { navigation } = props;
  const inputUno = useRef(null);
  const inputDos = useRef(null);
  const inputTres = useRef(null);
  const inputCuatro = useRef(null);
  let token = code + codeDos + codeTres + codeCuatro;
  const handleConfirmation = () => {
    axios
      .put(`http://${localhost}/api/auth/verify/${token}`, user.email)
      .then(() => navigation.navigate("Company"))
      .catch(() => alert("Código incorrecto"));
  };

  useEffect(() => {
    axios
      .post(`http://${localhost}/api/auth/login`, {
        email: user.email,
        password: user.password,
      })
      .then((data) => dispatch(login(data.data)))
      .catch((err) => console.log(err));
  }, [token.length > 3]);
  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Revisa tu correo</Text>
        <Text style={styles.subtitle}>Ingresa el código que te enviamos</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            autoFocus={true}
            ref={inputUno}
            style={styles.input}
            maxLength={1}
            value={code}
            keyboardType={"numeric"}
            onChangeText={(text) => {
              setCode(text);
            }}
            onSelectionChange={() => {
              code ? inputDos.current.focus() : null;
            }}
            //returnKeyType="next"
          />
          <TextInput
            ref={inputDos}
            style={styles.input}
            maxLength={1}
            value={codeDos}
            keyboardType={"numeric"}
            onChangeText={(text) => {
              setCodeDos(text);
            }}
            onSelectionChange={() => {
              codeDos ? inputTres.current.focus() : null;
            }}
          />
          <TextInput
            ref={inputTres}
            style={styles.input}
            maxLength={1}
            keyboardType={"numeric"}
            value={codeTres}
            onChangeText={(text) => {
              setCodeTres(text);
            }}
            onSelectionChange={() => {
              codeTres ? inputCuatro.current.focus() : null;
            }}
          />
          <TextInput
            ref={inputCuatro}
            style={styles.input}
            maxLength={1}
            value={codeCuatro}
            keyboardType={"numeric"}
            onChangeText={(text) => {
              setCodeCuatro(text);
            }}
          />
        </View>
        <Button onPress={handleConfirmation}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
            }}
          >
            CONFIRMAR
          </Text>
        </Button>
        <TouchableOpacity
          onPress={() =>
            WebBrowser.openBrowserAsync("https://google.com/gmail")
          }
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              textDecorationLine: "underline",
              margin: 10,
            }}
          >
            Ir a mi email
          </Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  logo: {
    width: 300,
    height: 70,
    marginHorizontal: 70,
    marginVertical: 100,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    padding: 15,
    marginBottom: 70,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 6,
    marginHorizontal: 2,
    marginBottom: 75,
    textAlign: "center",
    padding: 10,
    fontSize: 22,
  },
});

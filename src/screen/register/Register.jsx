import axios from "axios";
import React, { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import logo from "../../../assets/logo.png";
import { useInput } from "../../hooks/customHook";
import Gradient from "../../components/gradient/Gradient";

const Register = (props) => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [profesion, setProfesion] = useState()
  const [password, setPassword] = useState();
  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const handleSubmit = () => {
    axios
      .post(`http://localhost:3001/api/auth/register`, {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        company: company,
        profesion: profesion,
        password: password,
      })
      .then(() => goToLogin());
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={(data) => setName(data)}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          value={lastName}
          onChangeText={(data) => setLastName(data)}
        />
        <TextInput
          placeholder="Phone"
          style={styles.input}
          value={phone}
          onChangeText={(data) => setPhone(data)}
        />
         <TextInput
          placeholder="Profesion"
          style={styles.input}
          value={profesion}
          onChangeText={(data) => setProfesion(data)}
        />
        <TextInput
          placeholder="Company"
          style={styles.input}
          value={company}
          onChangeText={(data) => setCompany(data)}
        />
        <TextInput
          placeholder="Email"
          type="email"
          style={styles.input}
          value={email}
          onChangeText={(data) => setEmail(data)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(data) => setPassword(data)}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Register</Text>
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
    width: 300,
    height: 70,
    marginHorizontal: 70,
    marginVertical: 50,
  },
  input: {
    width: 343,
    height: 52,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 2,
    marginBottom: 15,
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 343,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    margin: 29,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Register;

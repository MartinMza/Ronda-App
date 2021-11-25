import axios from "axios";
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
import { useInput } from "../../hooks/customHook";
import Gradient from "../../components/gradient/Gradient";

const Register = () => {
  const name = useInput("name");
  const lastName = useInput("lastName");
  const email = useInput("email");
  const phone = useInput("phone");
  const company = useInput("company");
  const password = useInput("password");

  // const handleSubmit = () => {
  //   console.log("hola");
  //   axios
  //     .post(`http://${localHostIP}/api/auth/register`, {
  //       name: name.value,
  //       lastName: lastName.value,
  //       email: email.value,
  //       phone: phone.value,
  //       company: company.value,
  //       password: password.value,
  //     })
  //     .then((res) => console.log("res"));
  // };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <TextInput placeholder="Name" style={styles.input} {...name} />
        <TextInput placeholder="Last Name" style={styles.input} {...lastName} />
        <TextInput placeholder="Phone" style={styles.input} {...phone} />
        <TextInput placeholder="Company" style={styles.input} {...company} />
        <TextInput
          placeholder="Email"
          type="email"
          style={styles.input}
          {...email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          {...password}
        />

        <TouchableOpacity  style={styles.button}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Register</Text>
        </TouchableOpacity>
      </Gradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 275,
    height: 98.09,
    marginHorizontal: 68,
    marginVertical: 30,
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

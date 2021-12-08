import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import { localhost } from "../../localHostIP.json";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Button from "../../components/button/Button";

const Company = (props) => {
  const { navigation } = props;
  const [value, setValue] = useState("");
  const [organization, setOrganization] = useState([]);
  const [myOrganization, setMyOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const user = useSelector(selectUser);
  const [boolean, setBoolean] = useState(true);
  const [profession, setProfession] = useState("")
  const input = useRef();
  let oneOrganization;

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then((data) => setOrganization(data["data"]));
  }, []);

  useEffect(() => {
    oneOrganization = organization.filter((items) =>
      items.name.toLowerCase().includes(value.toLowerCase())
    );
    setMyOrganization(oneOrganization);
  }, [value]);

  const handleConfirmation = () =>{
    axios.put(`http://${localhost}/api/organization/empresa/${value}`)
    axios.put(`http://${localhost}/api/user`,{
      phone: phone,
      profession: profession
    })
  }
  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.logo}>
          <TextInput
            autoFocus={true}
            placeholder="Busca tu empresa"
            style={[
              styles.input,
              value
                ? {
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }
                : { borderRadius: 6 },
            ]}
            value={value}
            onChangeText={(text) => {
              setValue(text);
              setBoolean(false);
            }}
          />

          {boolean
            ? null
            : myOrganization?.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    setValue(item?.name);
                    setBoolean(!boolean);
                  }}
                  onFocus={input}
                >
                  <Text style={[styles.input, { zIndex: 1 }]}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              ))}
          <TextInput
            placeholder="Número de celular"
            style={[styles.input, { marginVertical: 30, borderRadius: 6 }]}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
            }}
          />
          <TextInput
            placeholder="Profesion"
            style={[styles.input, { marginVertical: 5, borderRadius: 6 }]}
            value={profession}
            onChangeText={(text) => {
              setProfession(text);
            }}
          />
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
          <TouchableOpacity onPress={() => navigation.navigate("NewCompany")}>
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                textDecorationLine: "underline",
                margin: 10,
              }}
            >
              Crear mi empresa
            </Text>
          </TouchableOpacity>
        </View>
      </Gradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  logo: {
    marginHorizontal: 70,
    marginVertical: 120,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: 300,
    height: 52,
    backgroundColor: "white",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    //fontFamily: "Lato_Black"
  },
  error: {
    textAlign: "center",
    color: "red",

    fontSize: 13,
  },
});
export default Company;

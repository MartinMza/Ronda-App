import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const goToConfirmation = () => {
    navigation.navigate("Confirmation");
  };
  const user = useSelector(selectUser);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then((data) => setOrganization(data["data"]));
  }, []);
  console.log("AAAAAAAAA",organization);
  useEffect(() => {
    let oneOrganization = organization.filter((items) => items === value);
    setMyOrganization(oneOrganization);
  }, [value]);

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.logo}>
          <TextInput
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
            }}
          />
          {value ? (
            <TextInput
              placeholder="Busca tu empresa"
              style={[
                styles.input,
                { borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
              ]}
              value={myOrganization}
              editable={false}
            />
          ) : null}

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

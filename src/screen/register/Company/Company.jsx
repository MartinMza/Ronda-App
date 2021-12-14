import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import logo from "../../../../assets/logo.png";
import Gradient from "../../../components/gradient/Gradient";
import { localhost } from "../../../localHostIP.json";
import styles from "./CompanyStyles";
import Button from "../../../components/button/Button";

const Company = (props) => {
  const { navigation } = props;
  let oneOrganization;

  //===================ORGANIZATION====================//
  const [value, setValue] = useState("");
  const [organization, setOrganization] = useState([]);
  const [myOrganization, setMyOrganization] = useState("");
  const [boolean, setBoolean] = useState(true);

  //===============USE EFFECT ALL ORGANIZATIONS=============//
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then((data) => setOrganization(data["data"]))
      .catch((err) => console.log(err));
  }, []);

  //===============USE EFFECT FILTER ORGANIZATIONS=============//
  useEffect(() => {
    oneOrganization = organization.filter((items) =>
      items.name.toLowerCase().includes(value.toLowerCase())
    );
    setMyOrganization(oneOrganization);
  }, [value]);

  const handleConfirmation = () => {
    axios.put(`http://${localhost}/api/organization/empresa/${value}`)
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <View style={styles.field}>
          <View>
          <Text style={[styles.underText]}>ELIGE TU EMPRESA</Text>
          <TextInput
            autoFocus={true}
            placeholder="Busca tu empresa"
            placeholderTextColor="black"
            style={[
              styles.input,
              value
                ? {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderColor: "black",
                    borderWidth: 1,
                  }
                : { borderRadius: 10, borderColor: "black", borderWidth: 1 },
            ]}
            value={value}
            onChangeText={(text) => {
              setValue(text);
              setBoolean(false);
            }}
          />
</View>
          {boolean ? null : (
            <FlatList
              data={myOrganization ? myOrganization : "No hay"}
              numColumns={1}
              keyExtractor={(value) => String(value.id)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setValue(item?.name);
                    setBoolean(!boolean);
                  }}
                >
                  <Text style={[styles.input]}>{item?.name}</Text>
                </TouchableOpacity>
              )}
            />
          )}
          <View style={{ alignItems: "center", marginTop: 20 }}>
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
        </View>
      </Gradient>
    </View>
  );
};

export default Company;

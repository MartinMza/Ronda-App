import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import { localhost } from "../../localHostIP.json";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Button from "../../components/button/Button";
import DropDownPicker from "react-native-dropdown-picker";
import { Campus, CampusID } from "../../utils/DataReservation.jsx";
import CompanyList from "../../components/companyList/Company";

const Company = (props) => {
  const { navigation } = props;
  const user = useSelector(selectUser);
  //===================ORGANIZATION====================//
  const [value, setValue] = useState("");
  const [organization, setOrganization] = useState([]);
  const [myOrganization, setMyOrganization] = useState("");
  const [boolean, setBoolean] = useState(true);

  //==============CAMPUS======================//
  const [open, setOpen] = useState(false);
  const [myCampus, setMyCampus] = useState(null);
  const [campus, setCampus] = useState(Campus);

  let oneOrganization;

  //===============USE EFFECT ALL ORGANIZATIONS=============//
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then((data) => setOrganization(data["data"]));
  }, []);

  //===============USE EFFECT FILTER ORGANIZATIONS=============//
  useEffect(() => {
    oneOrganization = organization.filter((items) =>
      items.name.toLowerCase().includes(value.toLowerCase())
    );
    setMyOrganization(oneOrganization);
  }, [value]);

  const handleConfirmation = () => {
    const id = myCampus ? CampusID(myCampus) : null;
    axios.put(`http://${localhost}/api/organization/empresa/${value}`);
    axios
      .put(`http://${localhost}/api/user/`, {
        campusId: id,
      })
      .then(() => navigation.navigate("Home"));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <View style={styles.field}>
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

          {boolean ? null : (
            <FlatList
              data={myOrganization? myOrganization:"No hay"}
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

          <DropDownPicker
            open={open}
            value={myCampus}
            items={Campus}
            setOpen={setOpen}
            setValue={setMyCampus}
            setItems={setCampus}
            placeholder="Elige una sede"
            zIndex={1}
            containerStyle={{
              marginVertical: 20,
            }}
          />
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
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  field: {
    marginHorizontal: 18,
    padding: 10,
    marginTop: 5,
  },
  input: {
    width: 333,
    height: 48,
    backgroundColor: "white",
    padding: 10,
    borderLeftColor: "black",
    borderLeftWidth: 1,
    borderRightColor: "black",
    borderRightWidth: 1,
  },
  logo: {
    width: 300,
    height: 70,
    marginHorizontal: 68,
    marginTop: 160,
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
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

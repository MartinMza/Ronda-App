import axios from "axios";
import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../../assets/logo.png";
import Gradient from "../../components/gradient/Gradient";
import { localhost } from "../../localHostIP.json";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Drop from "../../components/reservation/Drop";
import { Campus, CampusID } from "../../utils/DataReservation";

const NewCompany = (props) => {
  const { navigation } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState(Campus);
  const [name, setName] = useState(null);
  const [CUIT, setCUIT] = useState(null);
  const [socialReason, setSocialReason] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleSubmit = () => {
    let id = CampusID(value);
console.log(id)
    axios.post(`http://${localhost}/api/organization/empresa`, {
      name: name,
      phone: phone,
      CUIT: CUIT,
      social_reason: socialReason,
    });
    axios
      .put(`http://${localhost}/api/user/`, {
        campusId: id,
      })
      .then(() => {
        navigation.navigate("Home");
      });
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <Input
          placeholder="Nombre de la empresa"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="CUIT"
          value={CUIT}
          onChangeText={(text) => setCUIT(text)}
        />
        <Input
          placeholder="Razón Social"
          value={socialReason}
          onChangeText={(text) => setSocialReason(text)}
        />

        <Input
          placeholder="Numero de telefono"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Drop
          placeholder="Sedes"
          open={open}
          value={value}
          items={sedes}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSedes}
          zIndex={3}
        />

        <Button onPress={handleSubmit}>
          <Text style={{ fontSize: 15, color: "#fff" }}>CREAR EMPRESA</Text>
        </Button>
      </Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 333,
    height: 70,
    marginHorizontal: 70,
    marginVertical: 110,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 2,
    fontSize: 13,
  },
});

export default NewCompany;

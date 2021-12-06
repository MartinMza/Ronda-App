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

const NewCompany = (props) => {
  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const company = await axios
        .post(`http://${localhost}:3001/api/organization/empresa`, data)
        .then((user) => (user ? goToLogin() : alert("Algo anda mal")));
    },
  });

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <Input
          placeholder="Nombre de la empresa"
          value={formik.values.name}
          onChangeText={(text) => formik.setFieldValue("name", text)}
        />
        <Input
          placeholder="CUIT"
          value={formik.values.CUIT}
          onChangeText={(text) => formik.setFieldValue("CUIT", text)}
        />
        <Input
          placeholder="Razón Social"
          value={formik.values.social_reason}
          onChangeText={(text) => formik.setFieldValue("social_reason", text)}
        />
        <Input
          placeholder="Fecha de facturación"
          value={formik.values.date_time_fc}
          onChangeText={(text) => formik.setFieldValue("date_time_fc", text)}
        />
        <Input
          placeholder="Fecha de creación"
          value={formik.values.data_fc}
          onChangeText={(text) => formik.setFieldValue("data_fc", text)}
        />
        <Input
          placeholder="Numero de telefono"
          value={formik.values.phone}
          onChangeText={(text) => formik.setFieldValue("phone", text)}
        />
        <Button onPress={formik.handleSubmit}>
          <Text style={{ fontSize: 15, color: "#fff" }}>CREAR EMPRESA</Text>
        </Button>
      </Gradient>
    </View>
  );
};
function initialValues() {
  return { name: "", CUIT: "", social_reason: "", date_time_fc: "", phone: "" };
}
function validationSchema() {
  return {
    name: Yup.string().min(5).required("Nombre es requerido"),
    CUIT: Yup.string().min(10).required("CUIT es requerido"),
    social_reason: Yup.string().required("Razón social es requerida"),
    date_time_fc: Yup.string(),
    data_fc: Yup.string(),
    phone: Yup.string().min(8).required("Telefono es requerido"),
  };
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
    marginHorizontal: 70,
    marginVertical: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default NewCompany;

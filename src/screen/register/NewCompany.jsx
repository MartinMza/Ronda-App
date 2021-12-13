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
        .post(`http://${localhost}/api/organization/empresa`, data)
        .then(() => navigation.navigate("Home"));
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
          placeholder="Numero de telefono"
          value={formik.values.phone}
          onChangeText={(text) => formik.setFieldValue("phone", text)}
        />
        <Text style={styles.error}>{formik.errors.name}</Text>
        <Text style={styles.error}>{formik.errors.CUIT}</Text>
        <Text style={styles.error}>{formik.errors.social_reason}</Text>
        <Text style={styles.error}>{formik.errors.phone}</Text>
        <Button onPress={formik.handleSubmit}>
          <Text style={{ fontSize: 15, color: "#fff" }}>CREAR EMPRESA</Text>
        </Button>
      </Gradient>
    </View>
  );
};
function initialValues() {
  return { name: "", CUIT: "", social_reason: "", phone: "" };
}
function validationSchema() {
  return {
    name: Yup.string().min(5).required("Nombre es requerido"),
    CUIT: Yup.string().min(10).required("CUIT es requerido"),
    social_reason: Yup.string().required("Razón social es requerida"),
    phone: Yup.string().min(8).required("Telefono es requerido"),
  };
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 300,
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

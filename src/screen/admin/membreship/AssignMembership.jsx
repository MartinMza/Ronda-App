import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../../../assets/logo.png";
import Gradient from "../../../components/gradient/Gradient";
import Drop from "../../../components/reservation/Drop";
import { localhost } from "../../../localHostIP.json";
import { Campus } from "../../../utils/DataReservation";
import { useSelector } from "react-redux";
import { selectMembership } from "../../../features/membershipSlice";

const AssignMembership = (props) => {
  const { navigation } = props;
  const goToConfirmation = () => {
    navigation.navigate("Confirmation");
  };
  const membership = useSelector(selectMembership);

  const [openTwo, setOpenTwo] = useState(false);
  const [myMembership, setMyMembership] = useState(null);
  const [memberships, setMemberships] = useState([]);

  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/admin/membership/all`)
      .then(({ data }) => setMemberships(data))
      .catch((err) => console.log(err)); //anda a dormir kat
  }, []); //anda a dormir kat

  console.log(memberships); //que estas tomando
  const assignMembership = () => {
    axios //kat esta tomando de la buena
      .get(`http://${localhost}/api/admin/${membership}/${membership.name}`)
      .then(({}) => alert("Membresia asignada correctamenta"))
      .catch(() => alert("No se pudo asignar membresia"));
  };
  console.log(myMembership);
  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />

        <FlatList
          data={memberships}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          keyExtractor={(memberships) => String(memberships.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  setMyMembership(item.name);
                }}
              >
                <Text>
                  {item.name} ({item.location}), créditos: {item.credits}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity onPress={assignMembership} style={styles.button}>
          <Text style={styles.buttonText}>CREAR MEMBRESÍA</Text>
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
    marginTop: 50,
    marginBottom: 60,
  },
  input: {
    width: 333,
    height: 52,
    backgroundColor: "white",
    borderRadius: 6,
 
    justifyContent: "center",

  },
  button: {
    width: 243,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    margin: 29,
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
  card: {
    backgroundColor: "white",
    padding: 20,
    width: 333,
  },
});

export default AssignMembership;

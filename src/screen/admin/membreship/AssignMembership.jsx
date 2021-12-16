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

  const membership = useSelector(selectMembership);

  const [myMembership, setMyMembership] = useState(null);
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/admin/membership/all`)
      .then(({ data }) => setMemberships(data))
      .catch((err) => console.log(err)); 
  }, []); 

  const assignMembership = () => {
    axios 
      .get(`http://${localhost}/api/admin/membership/${myMembership}/${membership.name}`)
      .then(({}) => {alert("Membresia asignada correctamenta")
    navigation.navigate("NewMembership")})
      .catch(() => alert("No se pudo asignar membresia"));
  };

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
            <View>
              <TouchableOpacity
                onPress={() => {
                  setMyMembership(item.name);
                }}
                style={
                  myMembership !== item.name
                    ? [styles.card, { backgroundColor: "white" }]
                    : [styles.card, { backgroundColor: "#8144CF" }]
                }
              >
                <Text
                  style={
                    myMembership !== item.name
                      ? { color: null }
                      : { color: "white" }
                  }
                >
                  {item.name} ({item.location}), créditos: {item.credits}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity onPress={assignMembership} style={styles.button}>
          <Text style={styles.buttonText}>ASIGNAR MEMBRESÍA</Text>
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
  button: {
    width: 243,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    margin: 59,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    //fontFamily: "Lato_Black"
  },

  card: {
    borderRadius: 6,
    padding: 20,
    width: 333,
    margin: 5,
  },
});

export default AssignMembership;

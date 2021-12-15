import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Gradient from "../../components/gradient/Gradient";
import logo from "../../../assets/logo.png";
import axios from "axios";
import { localhost } from "../../localHostIP.json";

const Membership = () => {
  const [myMembership, setMyMembership] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/membership/me`)
      .then((res) => setMyMembership(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Gradient>
        <Image source={logo} style={styles.logo} />
        <View style={{ width: 333 }}>
          <Text style={styles.underText}>MI MEBRESIA</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>Nombre de la membresía:</Text>
          <Text style={styles.text}>{myMembership.name}</Text>
          <Text style={styles.title}>Sede:</Text>
          <Text style={styles.text}>{myMembership.location}</Text>
          <Text style={styles.title}>Créditos disponibles:</Text>
          <Text style={styles.text}>{myMembership.credits}</Text>
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
  dataContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 15,
    marginVertical: 30,
    width: 333,
  },
  text: {
    fontSize: 20,
    marginBottom: 18,
  },
  title: {
    marginVertical: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 55,
  },
  logo: {
    width: 300,
    height: 70,
    marginTop: 65,
  },
});
export default Membership;

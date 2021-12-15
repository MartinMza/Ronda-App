import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Touchable } from "react-native";
import { localhost } from "../../../localHostIP.json";
import Gradient from "../../../components/gradient/Gradient";
import MembershipList from "../../../components/admin/MembershipList";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import NavigationStack from "../../../navigation/NavigationStack";

export default function NewMembership() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then(({ data }) => setOrganizations(data))
      .catch((err) => console.log(err));
  }, []);

  const createMembership = (membership) => {
    axios
      .post(`http://${localhost}/api/admin/membership`, {membership})
      .then(({data}) => console.log("tst membership data-->",data))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.title, { textDecorationLine: "underline" }]}>
              ORGANIZACIONES
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("CreateMembership")}>
              <Text style={styles.title}>
                {" "}
                Agregar membresía{" "}
                <Icon name="plus-square" size={15} color="white" solid />
              </Text>
            </TouchableOpacity>
          </View>
          <MembershipList organizations={organizations} />
        </View>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",

    marginVertical: 20,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    margin: 15,
    width: 333,
  },
  text: {
    fontWeight: "bold",
    marginVertical: 16,
    fontSize: 16,
  },
});

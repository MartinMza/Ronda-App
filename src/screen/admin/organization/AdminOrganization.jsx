import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Touchable } from "react-native";
import { localhost } from "../../../localHostIP.json";
import Gradient from "../../../components/gradient/Gradient";
import MembershipList from "../../../components/admin/MembershipList";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";


export default function AdminOrganization(props) {
  const [organizations, setOrganizations] = useState([]);
  const { navigation } = props;
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then(({ data }) => setOrganizations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.title, { textDecorationLine: "underline" }]}>
              ORGANIZACIONES
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateMembership")}
            >
              
            </TouchableOpacity>
          </View>
          <MembershipList organizations={organizations} navigation={navigation}/>
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

import axios from "axios";
import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { localhost } from "../../../localHostIP.json";
import Gradient from "../../../components/gradient/Gradient";

export default function NewMembership() {
  const [organizations, setOrganizations] = useState([]);

  axios
    .get(`http://${localhost}/api/organization/`)
    .then(({ data }) => setOrganizations(data));

  console.log(organizations);
  return (
    <View>
      <Gradient>
        <View>
          <Text>Organizaciones</Text>
          <FlatList />
        </View>
      </Gradient>
    </View>
  );
}

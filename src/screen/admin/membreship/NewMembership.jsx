import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Touchable } from "react-native";
import { localhost } from "../../../localHostIP.json";
import Gradient from "../../../components/gradient/Gradient";
import MembershipList from "../../../components/admin/MembershipList";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { myMembership } from "../../../features/membershipSlice";

export default function NewMembership(props) {
  const [organizations, setOrganizations] = useState([]);
  const { navigation } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/organization/`)
      .then(({ data }) => setOrganizations(data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (item) => {
    dispatch(myMembership(item));
    navigation.navigate("AssignMembership");
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.title, { textDecorationLine: "underline" }]}>
              MEMBRESIAS
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateMembership")}
            >
              <Text style={styles.title}>
                {" "}
                Agregar membresía{" "}
                <Icon name="plus-square" size={15} color="white" solid />
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={organizations}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(organizations) => String(organizations.id)}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View>
                  <TouchableOpacity onPress={() => handleEdit(item)}>
                    <Text style={{ alignSelf: "flex-end" }}>
                      Asignar membresia{"  "}
                      <Icon
                        name="plus-circle"
                        size={20}
                        solid
                        color="green"
                        style={{ alignSelf: "flex-end" }}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Nombre de la empresa:</Text>
                <Text>{item.name}</Text>
                <Text style={styles.text}>Creditos disponibles:</Text>
                <Text>{item.avaliable_credits}</Text>
              </View>
            )}
          />
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

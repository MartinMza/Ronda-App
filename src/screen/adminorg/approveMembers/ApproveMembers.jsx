import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Gradient from "../../../components/gradient/Gradient";
import { localhost } from "../../../localHostIP.json";
import axios from "axios";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";

export default function ApproveMembers() {
  const [pendingUsers, setPendingUsers] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/user/users`)
      .then((data) => setPendingUsers(data.data));
  }, []);
  console.log(pendingUsers);
  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{ marginTop: 80 }}>
          <Text style={[styles.underText]}>MIEMBROS DE LA EMPRESA</Text>
          <FlatList
            data={pendingUsers}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 6,
                  backgroundColor: "white",
                  flexDirection: "row",
                  marginTop: 10,
                  marginHorizontal: 25,
                }}
              >
                <Text style={[styles.input]}>{item.name}</Text>
                <Text style={[styles.input]}>{item.org_state}</Text>
                {item.org_state!=="approved"? (<View style={{flexDirection:"row"}}>
                <Icon
                  name="check-circle"
                  size={24}
                  solid
                  color="green"
                  style={{ padding: 10 }}
                />
                <Icon
                  name="times-circle"
                  size={24}
                  solid
                  color="red"
                  style={{ padding: 10 }}
                /></View>):null}
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
    alignContent: "center",
  },
  input: {
    width: 123,
    height: 35,
    padding: 10,
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

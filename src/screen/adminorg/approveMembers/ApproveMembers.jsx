import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Gradient from "../../../components/gradient/Gradient";
import { localhost } from "../../../localHostIP.json";
import axios from "axios";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import * as WebBrowser from "expo-web-browser";

export default function ApproveMembers(props) {
  const { item } = props;
  const [pendingUsers, setPendingUsers] = useState([]);
  const [option, setOption] = useState(false);
  const user = useSelector(selectUser);
  useEffect(() => {
    axios.get(`http://${localhost}/api/user/users`).then((data) => {
      setPendingUsers(data.data);
    });
  }, []);

  const handleApprove = (item) => {
    axios.put(`http://${localhost}/api/organization/confirm/${item}`);
  };

  const handleDecline = (item) => {
    axios.delete(`http://${localhost}/api/organization/decline/${item}`);
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{ marginTop: 80 }}>
          <Text style={[styles.underText]}>MIEMBROS DE LA EMPRESA</Text>
          <FlatList
            data={pendingUsers}
            numColumns={2}
            style={{ borderRadius: 6 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(usari) => String(usari.id)}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 6,
                  backgroundColor: "white",
                  marginTop: 10,
                  marginHorizontal: 25,
                  alignItems: "center",
                }}
              >
                <Text
                  style={[styles.input, { fontSize: 18, fontWeight: "bold" }]}
                >
                  {item.name}
                </Text>
                <Image source={{ uri: item.picture }} style={styles.profile} />

                <Text
                  style={
                    ([styles.input], { fontStyle: "italic", marginBottom: 10 })
                  }
                >
                  {item.email}
                </Text>

                {user.role === "organizationAdmin" ? (
                  <Text style={[styles.input]}>{item.org_state}</Text>
                ) : null}

                {user.role === "organizationAdmin" ? (
                  item.org_state === "pending" ? (
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity onPress={() => handleApprove(item.id)}>
                        <Icon
                          name="check-circle"
                          size={24}
                          solid
                          color="green"
                          style={{ padding: 10 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDecline(item.id)}>
                        <Icon
                          name="times-circle"
                          size={24}
                          solid
                          color="red"
                          style={{ padding: 10 }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : null
                ) : null}
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
    textAlign: "center",
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
  row: {
    margin: 6,
  },
  profile: {
    width: 53,
    height: 53,
    flexDirection: "row",
    marginVertical: 15,
    marginLeft: 16,
    marginRight: 11,
  },
});

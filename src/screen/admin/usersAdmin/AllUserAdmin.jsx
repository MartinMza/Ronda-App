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

export default function AllUserAdmin(props) {
  const { item } = props;
  const [pendingUsers, setPendingUsers] = useState([]);
  const [option, setOption] = useState(false);
  const user = useSelector(selectUser);
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/admin/user/all`)
      .then((data) => {
        setPendingUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApprove = (item) => {
    axios
      .put(`http://${localhost}/api/organization/confirm/${item}`)
      .catch((err) => console.log(err));
  };

  const handleDecline = (itemId, itemRole) => {
   axios
      .delete(`http://${localhost}/api/admin/user/${itemId}`)
      .then(() => axios.get(`http://${localhost}/api/admin/user/all`))
      .then((data) => {
        setPendingUsers(data.data);
      })
      .catch((err) => alert("No puedes eliminar a otro administrador"))
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{ marginTop: 40 }}>
          <Text style={[styles.underText]}>MIEMBROS DE RONDA</Text>
          <FlatList
            data={pendingUsers}
            numColumns={2}
            style={{ borderRadius: 6 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(usari) => String(usari.id, usari.role)}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 6,
                  backgroundColor: "white",
                  marginTop: 10,
                  marginHorizontal: 15,
                  alignItems: "center",
                  width: 150,
                  padding:15
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
                <Text
                  style={
                    ([styles.input], { marginBottom: 10 })
                  }
                >
                <Text style={{fontWeight:"bold"}}> Rol:</Text> {item.role}
                </Text>
                <Text style={[styles.input]}>{item.org_state}</Text>

                <View style={{ flexDirection: "row"}}>
                  {user.role==="superAdmin"?<TouchableOpacity onPress={() => handleApprove(item.id)}>
                    <Icon
                      name="user-cog"
                      size={20}
                      solid
                      color="skyblue"
                      style={{ padding: 12 }}
                    />
                  </TouchableOpacity>:null}
                  <TouchableOpacity onPress={() => handleDecline(item.id, item.role)}>
                    <Icon
                      name="trash"
                      size={20}
                      solid
                      color="red"
                      style={{ padding: 10 }}
                    />
                  </TouchableOpacity>
                </View>
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

import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import UserList from "../../components/users/UserList";
import axios from "axios";
import { localhost } from "../../../localHostIP.json";

import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import profile from "../../../assets/icons/profile.png";
import Gradient from "../../components/gradient/Gradient";

export default function Search(props) {
  const { navigation } = props;
  const user = useSelector(selectUser);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Icon
            name="arrow-left"
            size={20}
            style={styles.bars}
            onPress={navigation.goBack}
          />
          <Text style={styles.mainName}>Buscar Usuarios</Text>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/user/users`)
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.box}>
          <View style={styles.sendBox}>
            <TextInput
              placeholder="Buscar persona"
              multiline
              editable
              numberOfLines={1}
              style={{ width: 280, marginVertical: 15, marginHorizontal: 5 }}
              // value={text}
              onChangeText={(text) => console.log(text)}
            />
          </View>
          {users ? <UserList users={users} navigation={navigation} /> : null}
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
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 350,
    height: 660,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginVertical: 15,
    marginLeft: 16,
    marginRight: 11,
    borderRadius: 6,
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    marginBottom: 10,
    width: 333,
    padding: 15,
  },
  textInput: { color: "white", marginVertical: 11 },
  contentInput: {
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sendBox: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSend: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 27,
    height: 27,
    resizeMode: "contain",
    // marginVertical:15,
    marginHorizontal: 15,
  },
  mainName: {
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
    marginBottom: 10,
    flexDirection: "row",
  },
});

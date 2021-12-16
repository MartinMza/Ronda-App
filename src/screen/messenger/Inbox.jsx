import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../components/gradient/Gradient";
import UserList from "../../components/users/UserList";

import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from "axios"
import { localhost } from "../../../localHostIP.json";

export default function Inbox(props) {
  const { navigation } = props;
  const user = useSelector(selectUser);

  const [message, setMessage] = useState();
  const [send, setSend] = useState(false);

  const goToSearch = () => {
    navigation.navigate("Search");
  };

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
          <Text style={styles.mainName}>Inbox</Text>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/message/`)
      .then((res)=> setMessage(res.data))
      .catch((err) => console.log(err));
  }, [send]);

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.box}>
          <UserList users={message} navigation={navigation} />
          <View style={styles.newSend}>
            <Icon name="plus" size={35} color="white" onPress={goToSearch} />
          </View>
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
    marginVertical: 38,
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
  mainName: {
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  newSend: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
});

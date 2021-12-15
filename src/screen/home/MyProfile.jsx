import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../components/gradient/Gradient";

import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function MyProfile() {
  const user = useSelector(selectUser);
  console.log(user);

  /* 
  //edit profile //pending
` const editHandle = async (data) => {
    try {
        await axios.put(`http://${localhost}/api/user`, data)
    } catch (err) {
        console.log(err)
    }
}
  */

  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <Image source={{ uri: user.picture }} style={styles.image} />
        </View>
        <Text
          style={{
            fontSize: 28,
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {user.name}
        </Text>
        <View style={{ margin: 15 }}>
          <Text style={styles.textInput}>Email</Text>
          <View style={styles.contentInput}>
            <Text style={styles.input}>{user.email}</Text>
            <Icon
            style={{padding:15}}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => console.log("its working")}
            />
          </View>
          <Text style={styles.textInput}>Celular</Text>
          <View style={styles.contentInput}>
            <Text style={styles.input}>{user.phone}</Text>
            <Icon
            style={{padding:15}}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => console.log("its working")}
            />
          </View>
          <Text style={styles.textInput}>Profesión</Text>
          <View style={styles.contentInput}>
            <Text style={styles.input}>{user.profession}</Text>
            <Icon
            style={{padding:15}}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => console.log("its working")}
            />
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
  image: {
    width: 180,
    height: 180,
    marginVertical: 15,
    marginLeft: 16,
    marginRight: 11,
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
});

import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../components/gradient/Gradient";
import MessageList from "../../components/menssenger/MessageList"

import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function Inbox() {
  const user = useSelector(selectUser);
  console.log(user);

  const fakeData=[
    {
      id: 1,
      content: "Hola pepe soy jose luis",
      user:{name: "Jose Luis", id: 3,}
  },
  {
    id: 2,
    content: "Hola pepe soy jbalvin",
    user:{name: "Jose ", id: 2,}
},
{
  id: 3,
  content: "Hola pepe tu vieja",
  user:{name: "Luis", id: 4,}
},
]

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.box}>
          <Text> Chat </Text>
          <MessageList message={fakeData}/>
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
    width: 330,
    height: 700,
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
});

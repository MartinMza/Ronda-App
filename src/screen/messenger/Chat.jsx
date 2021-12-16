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
import Gradient from "../../components/gradient/Gradient";
import MessageList from "../../components/menssenger/MessageList";
import axios from "axios";
import { localhost } from "../../../localHostIP.json";

import { selectMailUser } from "../../features/mailUserSlice";
import { useSelector } from "react-redux";
import profile from "../../../assets/icons/profile.png"


export default function Chat(props) {
  const {navigation} = props
  const receiver = useSelector(selectMailUser);
  const {id, name, email, picture} = receiver
  
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "center", marginLeft: 10,}}>
          <Icon
            name="arrow-left"
            size={20}
            style={styles.bars}
            onPress={navigation.navigate("Inbox")}
          />
          <Image source={{uri: picture}} style={styles.logo} />
          <Text style={styles.mainName}>{name}</Text>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/message/${id}`)
      .then((res)=> setMessage(res.data))
      .catch((err) => console.log(err));
  }, [send]);

  const handleSubmit = async (text) => {
    axios.post(`http://${localhost}/api/message/${id}`, { message: text })
    setText("");
    setSend(send+1)
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.box}>
          <MessageList message={message} name={name} />
          <View style={styles.sendBox}>
            <TextInput
              placeholder="Envia un mensaje"
              multiline
              editable
              numberOfLines={2}
              style={{ width: 280, marginVertical: 15, marginHorizontal: 5, }}
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity
              style={styles.buttonSend}
              onPress={() => handleSubmit(text)}
            >
              <Icon name="paper-plane" size={20} />
            </TouchableOpacity>
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
  logo:{
    width: 27,
    height:27,
    resizeMode: "contain",
    // marginVertical:15,
    marginHorizontal: 15
  },
  mainName: {
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
    marginBottom: 5,
    flexDirection: "row",
  },
});

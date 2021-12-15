import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import { selectUser, login } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { localhost } from "../../localHostIP.json";

export default function MyProfile(props) {
  const { navigation } = props;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [editablePhone, setEditablePhone] = useState(false);
  const [editableProfession, setEditableProfession] = useState(false);

  const [myPhone, setMyPhone] = useState("");
  const [myProfession, setMyProfession] = useState("");

  //edit profile //pending
  const handleEdit = () => {
    axios
      .put(`http://${localhost}/api/user/`, {
        phone: `${myPhone ? myPhone : user.phone}`,
        profession: `${myProfession ? myProfession : user.profession}`,
      })
      .then((data) => dispatch(login(data.data)))
      .then(() => navigation.navigate("Home"));
  };
console.log(user)
  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user?.picture }} style={styles.image} />
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
          <View style={[styles.contentInput]}>
            <TextInput
              style={[styles.input, { backgroundColor: "#fff" }]}
              defaultValue={user?.email}
              editable={false}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="white"
            />
          </View>
          <Text style={styles.textInput}>Celular</Text>
          <View style={styles.contentInput}>
            <TextInput
              style={
                editablePhone
                  ? [styles.input, { backgroundColor: "#fff" }]
                  : styles.input
              }
              editable={editablePhone}
              value={myPhone ? myPhone : user.phone}
              onChangeText={(text) => {
                setMyPhone(text);
              }}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => setEditablePhone(!editablePhone)}
            />
          </View>
          <Text style={styles.textInput}>Profesión</Text>
          <View style={styles.contentInput}>
            <TextInput
              style={
                editableProfession
                  ? [styles.input, { backgroundColor: "#fff" }]
                  : styles.input
              }
              editable={editableProfession}
              value={myProfession ? myProfession : user.profession}
              onChangeText={(text) => {
                setMyProfession(text);
              }}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => setEditableProfession(!editableProfession)}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button onPress={handleEdit}>
            <Text style={{ color: "white", fontSize: 15 }}>
              GUARDAR CAMBIOS
            </Text>
          </Button>
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
    height: "100%",
    width: "100%",
  },
  input: {
    fontSize: 15,
    width: 290,
    padding: 15,
    backgroundColor: "rgba(192,192,192,0.5)",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  textInput: { color: "white", marginVertical: 11 },
  contentInput: {
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 76,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginVertical: 30,
    width: 150,
    height: 150,
  },
});

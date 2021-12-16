import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../../components/gradient/Gradient";
import Button from "../../../components/button/Button";
import { selectUser, login } from "../../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { localhost } from "../../../localHostIP.json";
import { selectMembership } from "../../../features/membershipSlice";

export default function EditInfo(props) {
  const { navigation } = props;
  const company = useSelector(selectMembership);
  const dispatch = useDispatch();
  const [editablePhone, setEditablePhone] = useState(false);
  const [editableName, setEditableName] = useState(false);
  const [editableSocialReason, setEditablSocialReason] = useState(false);
  const [editableFacturationDay, setEditableFacturationDay] = useState(false);

  const [myPhone, setMyPhone] = useState("");
  const [myName, setMyName] = useState("");
  const [socialReason, setSocialReason] = useState("");
  const [facturationDay, setFacturationDay] = useState("");

  //edit profile //pending
  const handleEdit = () => {
    // edit organization
    axios
      .put(`http://${localhost}/api/admin/organization/${company.id}`, {
        name: `${myName ? myName : company.name}`,
        phone: `${myPhone ? myPhone : company.phone}`,
        social_reason: `${socialReason ? socialReason : company.social_reason}`,
        facturationDay: `${
          facturationDay ? facturationDay : company.facturationDay
        }`,
      })
      .then((data) => dispatch(login(data.data)))
      .then(() => navigation.navigate("Home"))
      .catch(() => alert("no fue posible actualizar la informacion "));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{ margin: 15 }}>
          <Text style={styles.textInput}>Nombre</Text>
          <View style={styles.contentInput}>
            <TextInput
              style={
                editableName
                  ? [styles.input, { backgroundColor: "#fff" }]
                  : styles.input
              }
              editable={editableName}
              value={myName ? myName : company.name}
              onChangeText={(text) => {
                setMyName(text);
              }}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => setEditableName(!editableName)}
            />
          </View>
          <Text style={styles.textInput}>CUIT</Text>
          <View style={[styles.contentInput]}>
            <TextInput
              style={[styles.input, { backgroundColor: "#fff" }]}
              defaultValue={company?.CUIT}
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
              value={myPhone ? myPhone : company.phone}
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

          <Text style={styles.textInput}>Fecha de facturación</Text>
          <View style={styles.contentInput}>
            <TextInput
              style={
                editableFacturationDay
                  ? [styles.input, { backgroundColor: "#fff" }]
                  : styles.input
              }
              editable={editableFacturationDay}
              value={facturationDay ? facturationDay : company.facturationDay}
              onChangeText={(text) => {
                setFacturationDay(text);
              }}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => setEditableFacturationDay(!editableFacturationDay)}
            />
          </View>
          <Text style={styles.textInput}>Fecha de creacion</Text>
          <View style={[styles.contentInput]}>
            <TextInput
              style={[styles.input, { backgroundColor: "#fff" }]}
              defaultValue={company?.creationDate}
              editable={false}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="white"
            />
          </View>
          <Text style={styles.textInput}>Razón Social</Text>
          <View style={styles.contentInput}>
            <TextInput
              style={
                editableSocialReason
                  ? [styles.input, { backgroundColor: "#fff" }]
                  : styles.input
              }
              editable={editableSocialReason}
              value={socialReason ? socialReason : company.social_reason}
              onChangeText={(text) => {
                setSocialReason(text);
              }}
            />
            <Icon
              style={{ padding: 15 }}
              name="pencil"
              size={25}
              color="gray"
              onPress={() => setEditablSocialReason(!editableSocialReason)}
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

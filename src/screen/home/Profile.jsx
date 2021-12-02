import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import profile from "../../../assets/icons/profile.png";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { localhost } from "../../localHostIP.json";

export default function Profile(props) {
  const { navigation } = props;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const userLogout = () => {
    axios.post(`http://${localhost}/api/auth/logout`).then(() => {
      dispatch(logout());
      navigation.navigate("Start");
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 269,
          flexDirection: "row",
          borderBottomColor: "#C4C4C4",
          borderBottomWidth: 1,
        }}
      >
        <Image source={profile} style={styles.profile} />
        <View style={{ marginTop: 5 }}>
          <Text style={styles.text}>{user ? user.name : "Name"}</Text>
          <Text style={styles.text}>Puesto</Text>
          <Text style={styles.text}>Ronda</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name="calendar"
            size={25}
            onPress={() => console.log("profile")}
            style={styles.icons}
          />
          <Text>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("Reserva")}
        >
          <Icon name="calendar-check" size={25} style={styles.icons} />
          <Text>Reserva</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon name="home" size={25} style={styles.icons} />
          <Text>Salas y Espacios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name="suitcase"
            size={25}
            onPress={() => console.log("profile")}
            style={styles.icons}
          />
          <Text>Membresías Individuales</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name="users"
            size={25}
            onPress={() => console.log("profile")}
            style={styles.icons}
          />
          <Text>Organización</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name="user-cog"
            size={25}
            onPress={() => console.log("profile")}
            style={styles.icons}
          />
          <Text>ADMIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={userLogout}>
          <Icon name="power-off" size={25} style={styles.icons} />
          <Text>Cerrar Sección</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 269,
    height: "100%",
    left: 0,
    top: 0,
    alignItems: "flex-start",
  },
  profile: {
    width: 53,
    height: 53,
    flexDirection: "row",
    marginVertical: 15,
    marginLeft: 16,
    marginRight: 11,
  },
  text: {
    fontSize: 13,
    margin: 2,
  },
  icons: {
    marginRight: 26,
  },
  touchable: {
    flexDirection: "row",
    marginVertical: 29,
    marginHorizontal: 23,
  },
});

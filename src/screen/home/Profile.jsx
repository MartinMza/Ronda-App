import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { useSelector } from "react-redux";
import { selectUser, logOut } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { localhost } from "../../localHostIP.json";
import IconsRight from "../../components/icons/IconsRight";
import logo from "../../../assets/LogoRondaColor.jpg";

export default function Profile(props) {
  const { navigation } = props;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const userLogout = async () => {
    const user = await axios
      .post(`http://${localhost}/api/auth/logout`)
      .then(() => dispatch(logOut()))
      .then(() => navigation.navigate("Start"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconsRight navigation={navigation} />,
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="bars"
            size={20}
            style={styles.bars}
            onPress={() => navigation.navigate("Home")}
          />
          <Image source={logo} style={styles.logo} />
        </View>
      ),
    });
  }, []);

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
        <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
          <Image source={{ uri: user?.picture }} style={styles.profile} />
        </TouchableOpacity>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.text}>{user ? user.name : "Name"}</Text>
          <Text style={styles.text}>Puesto</Text>
          <Text style={styles.text}>Ronda</Text>
        </View>
      </View>
      {user?.role !== "admin" ? (
        <View>
          {user?.org_state === "approved" ? (
            <View>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate("Calendar")}
              >
                <Icon name="calendar" size={25} style={styles.icons} />
                <Text>Mis reservas</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate("Reservation")}
              >
                <Icon name="calendar-check" size={25} style={styles.icons} />
                <Text>Hacer una reserva</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate("Salas")}
              >
                <Icon name="home" size={25} style={styles.icons} />
                <Text>Salas y Espacios</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate("Membership")}
              >
                <Icon name="suitcase" size={25} style={styles.icons} />
                <Text>Mi mebresía</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => navigation.navigate("Approve")}
              >
                <Icon name="users" size={25} style={styles.icons} />
                <Text>Mi organización</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <TouchableOpacity style={styles.touchable} onPress={userLogout}>
            <Icon name="power-off" size={25} style={styles.icons} />
            <Text>Cerrar Sección</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("ReservationAdmin")}
            >
              <Icon name="calendar" size={25} style={styles.icons} />
              <Text>Reservas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("Salas")}
            >
              <Icon name="home" size={25} style={styles.icons} />
              <Text>Salas y Espacios</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("NewMembership")}
            >
              <Icon name="suitcase" size={25} style={styles.icons} />
              <Text>Asignar/Crear membresías</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("AdminOrganization")}
            >
              <Icon name="users" size={25} style={styles.icons} />
              <Text>Organizaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("AllUserAdmin")}
            >
              <Icon name="address-book" size={25} style={styles.icons} />
              <Text>Usuarios</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.touchable} onPress={userLogout}>
            <Icon name="power-off" size={25} style={styles.icons} />
            <Text>Cerrar Sección</Text>
          </TouchableOpacity>
        </View>
      )}
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
  logo: {
    width: 180,
    height: 27,
    resizeMode: "contain",
    marginVertical: 15,
  },
  bars: {
    color: "black",
    marginLeft: 18,
    marginVertical: 20,
  },
});

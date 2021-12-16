import React, { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../../../assets/LogoRondaColor.jpg";
import Gradient from "../../components/gradient/Gradient";
import IconsRight from "../../components/icons/IconsRight";
import Foro from "../foro/Foro";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { localhost } from "../../localHostIP.json";
import axios from "axios";
export default function Home(props) {
  const { navigation } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/auth/me`)
      .then((data) => dispatch(login(data.data)));
  }, []);

  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  const goToInbox = () => {
    navigation.navigate("Inbox");
  };
  const goToSearch = () => {
    navigation.navigate("Search");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 22 }}>
          <Icon
            name="envelope"
            size={24}
            color="black"
            style={{ marginLeft: 17 }}
            onPress={goToInbox}
          />
          <Icon
            name="search"
            size={24}
            color="black"
            style={{ marginLeft: 17 }}
            onPress={goToSearch}
          />
        </View>
      ),
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="bars"
            size={20}
            onPress={goToProfile}
            style={styles.bars}
          />
          <Image source={logo} style={styles.logo} />
        </View>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <Gradient>
        <Foro />
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
  buttonText: {
    color: "white",
    fontSize: 20,
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

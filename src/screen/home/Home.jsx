import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "../../../assets/LogoRondaColor.jpg"
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import IconsRight from "../../components/icons/IconsRight"
import Foro from "../foro/Foro";
import Reserva from "../reserva/Reserva"

export default function Home(props) {
  const { navigation} = props;
  console.log(props)
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (<IconsRight />),
      headerLeft: () => (
        <View style={{flexDirection: "row",}}>
          <Icon
            name="bars"
            size={20}
            onPress={() => console.log("profile")}
            style={styles.bars}
          />
          <Image source={logo} style={styles.logo}/>
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Gradient>
        {/* <Foro/> */}
        <Reserva/>
        <Button onPress={goToProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </Button>
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
  logo:{
    width: 180,
    height:27,
    resizeMode: "contain",
    marginVertical:15,

    
  },
  bars:{
    color: "black",
    marginLeft: 18,
    marginVertical:20
  }
});


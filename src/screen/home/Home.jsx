import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import Foro from "../foro/Foro"
import Reserva from "../reserva/Reserva"

export default function Home(props) {
    const { navigation } = props;
    const goToProfile = () => {
        navigation.navigate("Profile")
    }

    
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
});

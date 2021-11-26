import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";

export default function Home(props) {
    const { navigation } = props;
    const goToProfile = () => {
        navigation.navigate("Profile")
    }
  return (
    <View style={styles.container}>
      <Gradient>
        <Text style={styles.buttonText}>Home</Text>
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

import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Gradient from "../../components/gradient/Gradient";

export default function Home() {
  return (
    <View style={styles.container}>
      <Gradient>
        <Text>Home</Text>
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
});
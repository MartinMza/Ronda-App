import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Gradient({ children }) {
  return (
    <LinearGradient
      colors={["#EB76FF","#8144CF", "#44CFC7"]}
      start={{
        x: -1,
        y: -1.5,
      }}
      style={styles.container}
    >
      <View style={styles.container}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});

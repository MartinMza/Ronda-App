import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Gradient({ children }) {
  return (
    <LinearGradient
      colors={["purple", "rgba(72, 154, 199, 0.59)"]}
      start={{
        x: 2,
        y: 0.5,
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

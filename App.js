import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Login from "./src/views/login/Login";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["purple", "rgba(72, 154, 199, 0.59)"]}
        start={{
          x: 2,
          y: 0.5,
        }}
        style={styles.container}
      >
      <Text>Hello app!</Text>
      <Login />
      <StatusBar style="auto" />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

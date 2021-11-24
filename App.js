import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Register from "./src/views/register/Register";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["purple", "rgba(72, 154, 199, 0.59)"]}
        start={{
          x: 2,
          y: 0.5,
        }}
        style={styles.container}
      >
<<<<<<< HEAD
      <Login />
=======
       <Register></Register>
      <Text>Hello app!</Text>
>>>>>>> e3a380b17f4db996a8b6422aa2f6e9aa792c4f17
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
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

import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Register from "./src/views/register/Register";
import Login from "./src/views/login/Login";

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <LinearGradient
        colors={["purple", "rgba(72, 154, 199, 0.59)"]}
        start={{
          x: 2,
          y: 0.5,
        }}
        style={styles.container}
      >
      <Login />
      {/* <Register /> */}
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
    </NavigationContainer>
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

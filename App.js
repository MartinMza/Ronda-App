
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import NavigationStack from "./src/navigation/NavigationStack";
import Gradient from "./src/components/gradient/Gradient"


export default function App() {
  return (

    <NavigationContainer>
        <NavigationStack />
        <StatusBar style="auto" />
    </NavigationContainer>
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

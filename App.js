import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import NavigationStack from "./src/navigation/NavigationStack";
import Gradient from "./src/components/gradient/Gradient";
import store from "./src/store/store";
import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Provider store={store}>
        <NavigationContainer>
          <NavigationStack />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </NativeRouter>
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

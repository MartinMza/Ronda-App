import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, LogBox } from "react-native";

import { Provider } from "react-redux";
import NavigationStack from "./src/navigation/NavigationStack";
import Gradient from "./src/components/gradient/Gradient";
import store from "./src/store/store";

import * as Linking from "expo-linking";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  LogBox.ignoreAllLogs();
  const prefix = Linking.createURL("/");

  // const linking = {
  //   prefixes: ["ronda://"],
  //   config: {
  //     screens: {
  //       Profile: "user",
  //     },
  //   },
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
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

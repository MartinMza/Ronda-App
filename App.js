import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      {/* <LinearGradient
        colors={["purple", "rgba(72, 154, 199, 0.59)"]}
        start={{
          x: 2,
          y: 0.5,
        }}
        style={styles.container}
      > */}
        <NavigationStack />
      <StatusBar style="auto" />
      {/* </LinearGradient> */}
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

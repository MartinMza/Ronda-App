import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button(props) {
  console.log(props)
  const { children, onPress } = props;
  
  return <TouchableOpacity style={styles.button} onPress={onPress}>{children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  button: {
    width: 343,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#8144CF",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

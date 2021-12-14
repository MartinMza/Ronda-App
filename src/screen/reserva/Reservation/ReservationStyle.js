import React from "react"
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1,
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 6,
    },
    underText: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      textDecorationLine: "underline",
      padding: 10,
      marginTop: 8,
    },
    buttonText: {
      color: "white",
      fontSize: 15,
      // fontFamily: "Lato_900Black",
    },
  });

export default styles
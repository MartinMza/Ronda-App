import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function MessageCard(props) {
  const { content, name } = props;
  return (
    <View style={styles.input}>
      <View style={styles.header}>
        <Text style={styles.mainName}>{name}</Text>
      </View>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderRadius: 6,
    marginVertical: 15,
    padding: 15,
    borderColor: "rgba(0,0,0,0.8)",
    borderWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    backfaceVisibility: "hidden",
    backgroundColor:"white",
    
  },
  mainName: {
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
    marginBottom: 10,
    flexDirection: "row",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  comment: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 5,
    justifyContent: "center",
  },
  image: {
    width: 15,
    height: 15,
  },
});

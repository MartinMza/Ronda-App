import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

export default function CommentCard(props) {
  const { content, name } = props;
  return (
    <View style={styles.input}>
      <View style={styles.header}>
        <Text style={styles.mainName}>{name}</Text>
        <TouchableOpacity>
          <Icon
            name="ellipsis-v"
            size={15}
            onPress={() => console.log("Like")}
          />
        </TouchableOpacity>
      </View>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 330,
    borderRadius: 6,
    marginBottom: 15,
    padding: 15,
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
    alignItems: "center",
  },
});

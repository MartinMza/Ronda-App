import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Post(props) {
  const { content, img, name } = props;
  return (
    <View>
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
        {img ? (
          <Image
            style={styles.imagen}
            source={{
              uri: img,
            }}
          />
        ) : null}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon name="heart" size={20} onPress={() => console.log("Like")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon name="comment" size={20} onPress={() => console.log("Like")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon name="share" size={20} onPress={() => console.log("Like")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 330,
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 30,
    marginButton: 15,
    padding: 15,
  },

  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 20,
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
  footer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 5,
  },
  buttonFooter: {
    margin: 10,
  },
  imagen: {
    width: 300,
    height: 150,
    marginVertical: 15,
    borderRadius: 6,
  },
});

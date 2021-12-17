import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { selectUser } from "../../features/userSlice";


export default function ImageCard(props) {
  const { item } = props;

  return (
      <Image source={item} style={styles.image}/>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 164,
    height: 170,
    borderRadius: 6,
    padding: 5,
    margin: 12,
  },
});

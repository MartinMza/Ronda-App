import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function IconsRight(props) {
  const { navigation } = props;

  return (
    <View style={{ flexDirection: "row", marginRight: 22,}}>
      <Icon name="envelope" size={24} color="black" style={styles.icons}/>
      <Icon name="bell" size={24} color="black" style={styles.icons}/>
      <Icon name="search" size={24} color="black" style={styles.icons}/>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    marginLeft: 17,
  },
});

import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../components/gradient/Gradient";
import profile from "../../../assets/icons/profile.png";

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <Text> My calendar </Text>
        </View>
      </Gradient>
    </View>
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
  image: {
    width: 180,
    height: 180,
    marginVertical: 15,
    marginLeft: 16,
    marginRight: 11,
  },
});

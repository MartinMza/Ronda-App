import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ImagenList from "../../components/imagen/ImagenList";
import Gradient from "../../components/gradient/Gradient";

export default function Recoleta() {
  const url = [
    "R1_thumb.jpg",
    "R2_thumb.jpg",
    "R3_thumb.jpg",
    "R4_thumb.jpg",
    "R5_thumb.jpg",
    "R6_thumb.jpg",
    "R7_thumb.jpg",
    "R8_thumb.jpg",
    "R9_thumb.jpg",
    "R10_thumb.jpg",
  ];

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.view}>
          <ImagenList url={url} style={{ marginTop: 15 }} />
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
  },
  view: {
    marginTop: 30,
  },
});

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ImagenList from "../../components/imagen/ImagenList";
import Gradient from "../../components/gradient/Gradient";

export default function Belgrano() {
  const url = [
    "portafolio_01.jpg",
    "portafolio_02.jpg",
    "portafolio_03.jpg",
    "portafolio_04.jpg",
    "portafolio_05.jpg",
    "portafolio_06.jpg",
    "portafolio_07.jpg",
    "portafolio_08.jpg",
    "portafolio_09.jpg",
    "portafolio_10.jpg",
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

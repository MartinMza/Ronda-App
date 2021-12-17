import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ImagenList from "../../components/imagen/ImagenList";
import Gradient from "../../components/gradient/Gradient";

export default function Recoleta() {
  const url = [
    require("../../../assets/sedes/R1_thumb.jpg"),
    require("../../../assets/sedes/R2_thumb.jpg"),
    require("../../../assets/sedes/R3_thumb.jpg"),
    require("../../../assets/sedes/R4_thumb.jpg"),
    require("../../../assets/sedes/R5_thumb.jpg"),
    require("../../../assets/sedes/R6_thumb.jpg"),
    require("../../../assets/sedes/R7_thumb.jpg"),
    require("../../../assets/sedes/R8_thumb.jpg"),
    require("../../../assets/sedes/R9_thumb.jpg"),
    require("../../../assets/sedes/R10_thumb.jpg"),
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

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ImagenList from "../../components/imagen/ImagenList";
import Gradient from "../../components/gradient/Gradient";

export default function Belgrano() {
  const url = [
    require("../../../assets/sedes/portfolio_01.jpg"),
    require("../../../assets/sedes/portfolio_02.jpg"),
    require("../../../assets/sedes/portfolio_03.jpg"),
    require("../../../assets/sedes/portfolio_04.jpg"),
    require("../../../assets/sedes/portfolio_05.jpg"),
    require("../../../assets/sedes/portfolio_06.jpg"),
    require("../../../assets/sedes/portfolio_07.jpg"),
    require("../../../assets/sedes/portfolio_08.jpg"),
    require("../../../assets/sedes/portfolio_09.jpg"),
    require("../../../assets/sedes/portafolio_10.jpg"),
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

import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { selectUser } from "../../features/userSlice";
import portafolio_01 from "../../../assets/sedes/portfolio_01.jpg"
import portafolio_02 from "../../../assets/sedes/portfolio_02.jpg"
import portafolio_03 from "../../../assets/sedes/portfolio_03.jpg"
import portafolio_04 from "../../../assets/sedes/portfolio_04.jpg"
import portafolio_05 from "../../../assets/sedes/portfolio_05.jpg"
import portafolio_06 from "../../../assets/sedes/portfolio_06.jpg"
import portafolio_07 from "../../../assets/sedes/portfolio_07.jpg"
import portafolio_08 from "../../../assets/sedes/portfolio_08.jpg"
import portafolio_09 from "../../../assets/sedes/portfolio_09.jpg"
import portafolio_10 from "../../../assets/sedes/portfolio_10.jpg"
import R1_thumb from "../../../assets/sedes/R1_thumbb.jpg"
import R2_thumb from "../../../assets/sedes/R2_thumbb.jpg"
import R3_thumb from "../../../assets/sedes/R3_thumbb.jpg"
import R4_thumb from "../../../assets/sedes/R4_thumbb.jpg"
import R5_thumb from "../../../assets/sedes/R5_thumbb.jpg"
import R6_thumb from "../../../assets/sedes/R6_thumbb.jpg"
import R7_thumb from "../../../assets/sedes/R7_thumbb.jpg"
import R8_thumb from "../../../assets/sedes/R8_thumbb.jpg"
import R9_thumb from "../../../assets/sedes/R9_thumbb.jpg"
import R10_thumb from "../../../assets/sedes/R10_thumb.jpg"

export default function ImageCard(props) {
  const { item } = props;

  return (
      <Image source={item} style={styles.image}/>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    borderRadius: 6,
    padding: 15,
    margin: 10,
  },
});

import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Datepick } from "../../components/datepicker/Datepicker";
import Gradient from "../../components/gradient/Gradient";

const Reservation = () => {
  return (
    <View style={styles.container}>
      <Datepick textStyle={{paddingVertical:15, paddingHorizontal:10, borderColor:"gray", borderWidth:2}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    marginTop: 80
  },
});
export default Reservation;

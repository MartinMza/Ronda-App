import React from "react";
import { View, Model, StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

export const Datepick = (props) => {
  const { textStyle } = props;

  return (
    <View style={{flex:1,marginTop:50}}>
        <View style={{marginHorizontal:20}}>
      <TouchableOpacity onPress={() => console.log("CLICKKKK")}>
        <Text style={textStyle}>{moment().format("DD-MM-YYYY")}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

Datepick.defaultProps = (textStyle = {}) => {};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});


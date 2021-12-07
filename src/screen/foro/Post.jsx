import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Post(props) {
  const { content } = props;
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
}

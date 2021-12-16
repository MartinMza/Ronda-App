import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  const { children, onChangeText, placeholder, value, editable } = props;

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      editable={editable}
    >
      {children}
    </TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 333,
    height: 52,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 2,
    marginBottom: 15,
    justifyContent: "center",
    padding: 10,
  },
});

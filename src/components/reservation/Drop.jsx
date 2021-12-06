import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function TypeRoom(props) {
    const {open, value, items, setOpen, setValue, setItems, placeholder, zIndex} = props
  return (
    <View style={[styles.buttonForReservation, {zIndex: zIndex}]}>
      {/* DROPDOWN TO SELECT A CAMPUS */}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        containerStyle={{
          width: "100%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonForReservation: {
    marginHorizontal: 18,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

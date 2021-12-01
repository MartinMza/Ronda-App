import React from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";

const turnos = [
  "9:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
];

export default function HourList() {
  return (
    <FlatList
      data={turnos}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.list}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    //   contentContainerStyle={styles.list}
      style={styles.lists}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
  },
  lists: {
    width: "50%",
    height: 60,
    backgroundColor: "white",
    marginLeft: 18,
    borderRadius: 6,
  },
});

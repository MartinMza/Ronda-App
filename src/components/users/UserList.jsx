import React from "react";
import { View, Text,TouchableOpacity, FlatList } from "react-native";
import UserCard from "./UserCard";

export default function UserList(props) {
  const { users } = props;
console.log("AAAAAA",message)
  return (
    <FlatList
      data={users}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(user) => String(user.id)}
      renderItem={({ item }) => (
        <TouchableOpacity><UserCard img={item?.img} name={item.name} id={item.id} email={item.email}/></TouchableOpacity>
      )}
    />
  );
}

import React from "react";
import { View, Text,TouchableOpacity, FlatList } from "react-native";
import UserCard from "./UserCard";

export default function UserList(props) {
  const { users, navigation } = props;


  
  return (
    <FlatList
      data={users}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(user) => String(user.id)}
      renderItem={({ item }) => (
        <UserCard item={item} navigation={navigation} />
      )}
    />
  );
}

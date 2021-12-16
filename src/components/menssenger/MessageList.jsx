import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import MessageCard from "./MessageCard";

export default function MessageList(props) {
  const { message, name } = props;
  return (
    <FlatList
      data={message}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(posts) => String(posts.id)}
      renderItem={({ item }) => <MessageCard item={item} name={name} />}
    />
  );
}

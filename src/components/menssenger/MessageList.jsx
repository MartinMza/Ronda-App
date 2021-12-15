import React from "react";
import { View, Text,TouchableOpacity, FlatList } from "react-native";
import MessageCard from "./MessageCard";

export default function MessageList(props) {
  const { message } = props;
  return (
    <FlatList
      data={message}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(posts) => String(posts.id)}
      renderItem={({ item }) => (
        <TouchableOpacity><MessageCard content={item?.content} name={item.user.name}/></TouchableOpacity>
      )}
    />
  );
}

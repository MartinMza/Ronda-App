import React from "react";
import { View, Text, FlatList } from "react-native";
import CommentCard from "./CommentCard"

export default function CommentList(props) {
  const { comment } = props;

  return (
    <FlatList
      data={comment}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(posts) => String(posts.id)}
      renderItem={({ item }) => <CommentCard content={item.comment} />}
    />
  );
}

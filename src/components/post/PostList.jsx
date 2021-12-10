import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../screen/foro/Post"

export default function PostList(props) {
  const { posts } = props;

  return (
    <FlatList
      data={posts}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(posts) => String(posts.id)}
      renderItem={({ item }) => <Post content={item.content} img={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F1*OsMBUUchHRtTT3n-ZX2xbA.jpeg&f=1&nofb=1"} name={item.user.name}/>}
    />
  );
}

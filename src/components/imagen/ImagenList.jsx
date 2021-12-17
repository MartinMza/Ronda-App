import React from "react";
import { FlatList, View } from "react-native";
import ImagenCard from "./ImagenCard";


export default function ImagenList(props) {
  const { url } = props;
  return (
    <View style={{ margin:5}}>
    <FlatList
      data={url}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(url) => String(url)}
      renderItem={({ item }) => <ImagenCard item={item}/>}
    /></View>
  );
}

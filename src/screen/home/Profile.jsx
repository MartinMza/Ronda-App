import React, { useEffect } from "react";
import { Image, FlatList, Text, View, StyleSheet } from "react-native";
import axios from "axios";
import { localhost } from "../../../localHostIP.json";
import profile from "../../../assets/icons/profile.png";

export default function Profile(props) {
  const { navigation } = props;
  const DATA = [
    {
      id:"123456789",
      title: "Calendario",
    },
    {
      id:"12345678",
      title: "Reserva",
    },
    {
      id:"1234567",
      title: "Salas y Espacios",
    },
    {
      id:"1234567891",
      title: "Membresías Individuales",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <Image source={profile} style={styles.profile} />
        </View>
        <View
          style={{
            marginTop: 70,
          }}
        >
          <Text style={styles.text}>Katherine Pacheco</Text>
          <Text style={styles.text}>Puesto</Text>
          <Text style={styles.text}>Ronda</Text>
        </View>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    alignItems: "flex-start",
  },
  profile: {
    width: 53,
    height: 53,
    marginHorizontal: 68,
    marginVertical: 100,
    flexDirection: "row",
  },
  text: {
    fontSize: 13,
    margin: 4,
    flexDirection: "row",
  },
  item:{
      margin: 15,
  },
  title:{
      fontSize: 18,
  }
});

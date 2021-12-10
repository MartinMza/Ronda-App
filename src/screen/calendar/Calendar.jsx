import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../components/gradient/Gradient";

import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function Calendar() {
  const user = useSelector(selectUser);

//   const [reserva, setReserva] = useState();

//   useEffect(() => {
//     axios
//       .get(`http://${localhost}/api/user/${user.id}`)
//       .then((res) => setReserva(res.data))
//       .catch((err) => console.error(err));
//   }, []);

const data = [
    {
        id:1,
        campus: "Belgrano",
        fecha: "11/12/2021",
        hora: "11:00 - 13:00",
        sala: "Grande",
    },
    {
        id:2,
        campus: "Belgrano",
        fecha: "15/12/2021",
        hora: "14:00 - 17:00",
        sala: "Grande",
    },
    {
        id:3,
        campus: "Belgrano",
        fecha: "22/12/2021",
        hora: "10:00 - 13:00",
        sala: "Mediana"
    }
]

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.card}>
          <Text>Mis Reservas</Text>
          <FlatList
            data={data}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(data) => String(data.id)}
            renderItem={({ item }) => {
                <View>
                <View>
                  <Icon name="dot" size={12} color="red" />
                  <Text>Sede - {item.campus}</Text>
                  <Text>Fecha {item.fecha} {item.hora}</Text>
                  <Text>Sala - {item.sala}  </Text>
                  
                </View>
                <View>
                <Icon name="bell" size={12} color="black" />
                  <Text>Estar presente 30 min antes</Text>
                </View>
                  
              </View>
            }}
          />
        </View>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 180,
      height: 180,
      marginVertical: 15,
      marginLeft: 16,
      marginRight: 11,
    },
    input: {
    
      fontSize: 15,
      marginBottom: 10,
      width: 333,
      padding: 10,
     
    },
    textInput: { color: "white", marginVertical: 11 },
  });
  
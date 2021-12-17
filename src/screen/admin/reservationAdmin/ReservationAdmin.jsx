import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Gradient from "../../../components/gradient/Gradient";
import axios from "axios";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import { localhost } from "../../../localHostIP.json";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ReservationAdmin() {
  const user = useSelector(selectUser);

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/reservation/all`)
      .then((res) => setReservations(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cancelReservation = (id, eventId, location) => {
    axios
      .delete(`http://${localhost}/api/calendar/delete/${eventId}/${location}`); //delete from calendar
    axios
      .delete(`http://${localhost}/api/reservation/cancel/${id}`) // delete from db
      .then(() => axios.get(`http://${localhost}/api/reservation/all`))
      .then((data) => setReservations(data.data))
      .catch((err) => alert("Ocurrio un problema"));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <Text style={styles.textInput}>TODAS LAS RESERVAS</Text>
        </View>
        <View>
          <FlatList
            data={reservations}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(value) =>
              String(value.id, value.eventId, value.location)
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.input}>
                  <Text style={{ fontWeight: "bold" }}>Lugar:</Text>{" "}
                  {item?.location}
                </Text>
                <Text style={styles.input}>
                  <Text style={{ fontWeight: "bold" }}>
                    Inicio de la reserva:
                  </Text>{" "}
                  {item?.start}
                </Text>
                <Text style={styles.input}>
                  <Text style={{ fontWeight: "bold" }}>Fin de la reserva:</Text>{" "}
                  {item?.end}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    cancelReservation(item.id, item.eventId, item.location)
                  }
                >
                  <Icon
                    name="times-circle"
                    size={18}
                    solid
                    color="red"
                    style={{ padding: 7, alignSelf: "flex-end" }}
                  />
                </TouchableOpacity>
              </View>
            )}
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
  },

  input: {
    fontSize: 15,
    width: 333,
    padding: 7,
  },
  textInput: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: 26,
    padding:5
  },
  card: {
    backgroundColor: "white",
    width: 333,
    borderRadius: 6,
    marginVertical: 10,
    padding:6
  },
});

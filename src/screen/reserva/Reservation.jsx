import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Datepick } from "../../components/datepicker/Datepicker";
import { Timepick } from "../../components/datepicker/Timepicker";
import Gradient from "../../components/gradient/Gradient";
import Drop from "../../components/reservation/Drop";
import { Campus, Room, Person, idType } from "../../utils/DataReservation.jsx";

const Reservation = () => {
  //=============CAMPUS=======================//
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState(Campus);

  //================TYPE ROOM ================//
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [type, setType] = useState(Room);

  const [InitTime, setInitTime] = useState(null);
  const [OutTime, setOutTime] = useState(null);
  const [date, setDate] = useState(null);

  return (
    <View style={styles.container}>
      <Gradient>
        <View>
          <Text style={[styles.underText, { marginLeft: 20 }]}>
            HACÉ TU RESERVA
          </Text>
          <Text style={{ color: "white", marginLeft: 33, marginTop: 20 }}>
            Elige tu sede
          </Text>
          <Drop
            placeholder="Sedes"
            open={open}
            value={value}
            items={sedes}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setSedes}
            zIndex={3}
          />
          <Text style={{ color: "white", marginLeft: 33, marginTop: 20 }}>
            Elige tu sala
          </Text>
          <Drop
            placeholder="Salas disponibles"
            open={typeOpen}
            value={typeValue}
            items={type}
            setOpen={setTypeOpen}
            setValue={setTypeValue}
            setItems={setType}
            zIndex={2}
          />
          <Text style={{ color: "white", marginLeft: 33, marginTop: 20 }}>
            Elige el día
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 6,
              marginHorizontal: 30,
              marginTop: 17,
              flexDirection: "row",
            }}
          >
            <Datepick
              textStyle={styles.input}
              onDateChange={(value) => setDate(value)}
            />
          </View>
          <View
            style={{
              borderRadius: 6,
              marginHorizontal: 30,
              flexDirection: "row",
            }}
          >
            <Timepick
              textStyle={styles.input}
              onDateChange={(value) => setInitTime(value)}
            />
            <Timepick
              textStyle={styles.input}
              onDateChange={(value) => setOutTime(value)}
            />
          </View>
        </View>
      </Gradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 8,
  },
});
export default Reservation;

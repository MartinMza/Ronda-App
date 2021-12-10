import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Datepick } from "../../components/datepicker/Datepicker";
import { Timepick } from "../../components/datepicker/Timepicker";
import Gradient from "../../components/gradient/Gradient";
import Drop from "../../components/reservation/Drop";
import {
  Campus,
  Room,
  Person,
  idType,
  Day,
  Hour,
} from "../../utils/DataReservation.jsx";
import moments from "moment-timezone";
import Button from "../../components/button/Button";
import axios from "axios";
import { localhost } from "../../localHostIP.json";

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
  const month = parseInt(moments(date).tz("Etc/GMT+5").format("MM")) - 1;

  const handleReservation = () => {
    axios
      .post(`http://${localhost}/api/calendar/set`, {
        syear: `${moments(date).tz("Etc/GMT+5").format("YYYY")}`,
        smonth: `${month}`,
        sday: `${moments(date).tz("Etc/GMT+5").format("DD")}`,
        shours: `${moments(InitTime).tz("Etc/GMT+5").format("HH")}`,
        sminutes: `${moments(InitTime).tz("Etc/GMT+5").format("mm")}`,
        location: `Sala ${typeValue} ${value}`,
        eyear: `${moments(date).tz("Etc/GMT+5").format("YYYY")}`,
        emonth: `${month}`,
        eday: `${moments(date).tz("Etc/GMT+5").format("DD")}`,
        ehours: `${moments(OutTime).tz("Etc/GMT+5").format("HH")}`,
        eminutes: `${moments(OutTime).tz("Etc/GMT+5").format("mm")}`,
      })
      .then(() => {alert("Tu reserva está lista")
    navigation.navigate("Home")})
    .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{marginTop:5}}>
          <Text style={[styles.underText, { marginLeft: 20, marginTop:10 }]}>
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
          <Text style={{ color: "white", marginLeft: 33, marginTop: 11 }}>
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
          <Text style={{ color: "white", marginLeft: 33, marginTop: 11 }}>
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
          <Text style={{ color: "white", marginLeft: 33, marginTop: 30 }}>
            Elige la hora de ingreso
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 6,
              marginHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Timepick
              textStyle={styles.input}
              onDateChange={(value) => setInitTime(value)}
            />
          </View>
          <Text style={{ color: "white", marginLeft: 33, marginTop: 30 }}>
            Elige la hora de salida
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 6,
              marginHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
              marginBottom: 25,
            }}
          >
            <Timepick
              textStyle={styles.input}
              onDateChange={(value) => setOutTime(value)}
            />
          </View>
        </View>
        <Button onPress={handleReservation}>
          <Text style={styles.buttonText}>HACER RESERVA</Text>
        </Button>
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
  buttonText: {
    color: "white",
    fontSize: 15,
    // fontFamily: "Lato_900Black",
  },
});
export default Reservation;

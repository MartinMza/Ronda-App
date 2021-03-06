import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Datepick } from "../../../components/datepicker/Datepicker";
import { Timepick } from "../../../components/datepicker/Timepicker";
import Gradient from "../../../components/gradient/Gradient";
import Drop from "../../../components/reservation/Drop";
import { Campus, Room } from "../../../utils/DataReservation.jsx";
import styles from "./ReservationStyle";
import moments from "moment-timezone";
import Button from "../../../components/button/Button";
import axios from "axios";
import { localhost } from "../../../localHostIP.json";
import * as WebBrowser from "expo-web-browser";

const Reservation = (props) => {
  const { navigation } = props;
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
      .then(() => {
        alert("Tu reserva est?? lista");
        navigation.navigate("Home");
      })
      .catch((err) => alert("No podemos generar tu reserva"));
  };

  const handleCalendars = () => {
    WebBrowser.openBrowserAsync(
      `https://bit.ly/${value.toLowerCase()}-${typeValue.toLowerCase()}`
    );
  };
  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{ marginTop: 5 }}>
          <Text style={[styles.underText, { marginLeft: 20, marginTop: 10 }]}>
            HAC?? TU RESERVA
          </Text>
          <Text
            style={{
              color: "white",
              marginLeft: 33,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
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
          <Text
            style={{
              color: "white",
              marginLeft: 33,
              marginTop: 7,
              fontWeight: "bold",
            }}
          >
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
          {value && typeValue ? (
            <TouchableOpacity onPress={handleCalendars}>
              <Text
                style={{
                  color: "white",
                  marginLeft: 33,
                  marginTop: 5,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                VER DISPONIBILIDAD DE {value.toUpperCase()}
                {""} {typeValue.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ) : null}
          <Text
            style={{
              color: "white",
              marginLeft: 33,
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Elige el d??a
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
          <Text
            style={{
              color: "white",
              marginLeft: 33,
              marginTop: 17,
              fontWeight: "bold",
            }}
          >
            Elige la hora de ingreso
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
            <Timepick
              textStyle={styles.input}
              onDateChange={(value) => setInitTime(value)}
            />
          </View>
          <Text
            style={{
              color: "white",
              marginLeft: 33,
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
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

export default Reservation;

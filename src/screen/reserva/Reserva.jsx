import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../components/button/Button";
import Drop from "../../components/reservation/Drop";
import { Campus, Room, Person, idType } from "../../utils/DataReservation.jsx";
import Gradient from "../../components/gradient/Gradient";
import { localhost } from "../../localHostIP.json";
import axios from "axios";
import {
  myReservation,
  selectReservation,
} from "../../features/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function Reserva(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  let weekDays = [];
  let weekHours = [];
  //-----------VALUE FOR ROOM-------------//
  const [option, setOption] = useState(false);

  //------------CAMPUS --------------------//
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sedes, setSedes] = useState(Campus);

  //-----------TYPE OF ROOM----------------//
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [type, setType] = useState(Room);

  //--------------TIME OPTION ---------------------//
  const [dropOpen, setDropOpen] = useState(false);
  const [time, setTime] = useState(null);
  const [turnos, setTurnos] = useState(weekHours);

  //--------------DAY OPTION ---------------------//
  const [dayOpen, setDayOpen] = useState(false);
  const [day, setDay] = useState(null);
  const [days, setDays] = useState(weekDays);
  //--------------------------------------------//
  const user = useSelector(selectUser);
  // --------------------ROUTE GET---------------------------//

  useEffect(() => {
    const id = typeValue ? idType(typeValue, value) : null;

    axios
      .get(`http://${localhost}/api/reservation/campus/${value}/room/${id}`)
      .then((res) => dispatch(myReservation(res.data)));
  }, [value, typeValue]);

  let reservation = useSelector(selectReservation);
  let dayAvailable = [];
  let timeAvailable = [];

  reservation?.length
    ? useEffect(() => {
        dayAvailable = reservation?.map((items) => {
          return items.day;
        });
        timeAvailable = reservation?.map((items) => {
          return items.time;
        });

        dayAvailable = dayAvailable?.filter(
          (item, index) => dayAvailable?.indexOf(item) === index
        );
        dayAvailable?.map((item) =>
          weekDays.push({
            label: item,
            value: item,
          })
        );
        timeAvailable = timeAvailable?.filter(
          (item, index) => timeAvailable?.indexOf(item) === index
        );
        timeAvailable?.map((item) =>
          weekHours.push({
            label: item,
            value: item,
          })
        );
        setDays(weekDays);
        setTurnos(weekHours);
      }, [value, typeValue])
    : null;
  const [myBooking, setMyBooking] = useState("");

  reservation?.length
    ? useEffect(() => {
        const idRoom = typeValue ? idType(typeValue, value) : null;

        axios
          .get(
            `http://${localhost}/api/reservation/room/${idRoom}/day/${day}/time/${time}`
          )
          .then((res) => setMyBooking(res.data.id));
      }, [day, time])
    : null;

  const handleBooking = () => {
    console.log("id", myBooking);
    axios
      .post(`http://${localhost}/api/reservation/reserve/${myBooking}`)
      .then(() => alert(`${user.name}, tu reserva fue hecha`))
      .then(() => navigation.navigate("Home"))
      .catch(() => alert("No es posible hacer tu reserva"));
  };

  return (
    <View style={styles.container}>
      <Gradient>
        <Text style={styles.underText}>HACÉ TU RESERVA</Text>
        <View
          style={[
            styles.buttonForReservation,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <TouchableOpacity
            onPress={() => setOption(!option)}
            style={
              option
                ? [
                    styles.buttonOption,
                    { backgroundColor: "#8144CF", width: "100%" },
                  ]
                : [styles.buttonOption, { width: "100%" }]
            }
          >
            <Text style={option ? { color: "#fff" } : null}>
              Sala de reunión
            </Text>
          </TouchableOpacity>
        </View>
        {/* DROPDOWN TO SELECT A CAMPUS */}
        <Drop
          open={open}
          value={value}
          items={sedes}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSedes}
          placeholder="Elige una sede"
          zIndex={3}
        />

        {/* DROPDOWN TO SELECT A CAMPUS */}
        {option ? (
          <Drop
            open={typeOpen}
            value={typeValue}
            items={type}
            setOpen={setTypeOpen}
            setValue={setTypeValue}
            setItems={setType}
            placeholder="Seleccione una sala"
            zIndex={2}
          />
        ) : null}
        {/* PICK A DATE */}
        <View style={[styles.buttonForReservation, { zIndex: 1 }]}>
          <DropDownPicker
            open={dayOpen}
            value={day}
            items={days}
            setOpen={setDayOpen}
            setValue={setDay}
            setItems={setDays}
            placeholder="Dia"
            containerStyle={{
              width: "48%",
              marginRight: 8,
            }}
          />

          <DropDownPicker
            open={dropOpen}
            value={time}
            items={turnos}
            setOpen={setDropOpen}
            setValue={setTime}
            setItems={setTurnos}
            placeholder="Hora"
            containerStyle={{
              width: "50%",
            }}
          />
        </View>

        {typeValue ? (
          <View style={styles.buttonForReservation}>
            <View style={styles.buttonOption}>
              <Text>
                <FontAwesome name="user" size={24} color="black" />
                {"   "}
                {Person(typeValue)}
              </Text>
            </View>
          </View>
        ) : null}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 50,
          }}
        >
          <Button onPress={() => handleBooking()}>
            <Text style={styles.buttonText}>Reservar</Text>
          </Button>
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
  buttonOption: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 10,
    marginTop: 8,
  },
  buttonForReservation: {
    marginHorizontal: 18,
    padding: 10,
    flexDirection: "row",
    //justifyContent: "space-between",
    marginVertical: 5,
  },

  profile: {
    width: "25%",
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  counter: {
    width: "34%",
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 18,
  },
});

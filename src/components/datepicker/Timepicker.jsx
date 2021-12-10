import React, { useState } from "react";
import {
  View,
  Model,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";
import moments from "moment-timezone";
export const Timepick = (props) => {
  const { textStyle, onDateChange } = props;
  const [date, setDate] = useState(moments().tz("Etc/GMT+5"));
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    console.log(selectedDate, "sadasdasda");
    setDate(moment(selectedDate));
  };

  const handleCancel = () => {
    setDate(moment(new Date()));
    setShow(false);
  };

  const handleDone = () => {
    props.onDateChange(date);
    setShow(false);
  };

  return (
    <TouchableOpacity onPress={() => setShow(true)}>
      <View>
        <Text style={textStyle}>{date.format("HH:mm")}</Text>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={["portrait"]}
          onRequestClose={() => {
            alert("NONONO");
            setShow(false);
          }}
          style={{ borderRadius: 6 }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "flex-end",
                flexDirection: "row",
              }}
              visible={show}
              onPress={() => setShow(false)}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginHorizontal: 20,
                  borderRadius: 6,
                }}
                onPress={() => {
                  console.log("clickeeedddd");
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 6,
                    overflow: "hidden",
                  }}
                >
                  <View>
                    <DateTimePicker
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      is24Hour={true}
                      value={new Date(date)}
                      mode={"time"}
                      timeZoneOffsetInSeconds={3600}
                      locale="es-ES"
                      minuteInterval={30}
                      //timeZoneOffsetInMinutes={30}
                      onChange={onChange}
                    ></DateTimePicker>
                  </View>
                  <TouchableOpacity
                    style={[styles.btnText, styles.btnCancel]}
                    onPress={handleCancel}
                  >
                    <Text> Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btnText, styles.btnDone]}
                    onPress={handleDone}
                  >
                    <Text> Done</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

Timepick.defaultProps = { textStyle: {}, onDateChange: () => {} };

const styles = StyleSheet.create({
  btnText: {
    position: "absolute",
    top: 0,
    height: 42,
    paddingHorizontal: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});

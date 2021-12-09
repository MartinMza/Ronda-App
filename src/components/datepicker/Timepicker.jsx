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

export const Timepick = (props) => {
  const { textStyle, onDateChange } = props;
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    console.log(selectedDate)
    setDate(moment(selectedDate));
    props.onDateChange(date);

  };
console.log(date)
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
                alignItems: "center",
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
                      
                      value={new Date(date)}
                      mode={"time"}
                      timeZoneOffsetInMinutes={60} 
                      onChange={onChange}
                    ></DateTimePicker>
                  </View>
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

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

export const Datepick = (props) => {
  const { textStyle } = props;
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
  };
  return (
    <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
      <View>
        <Text style={textStyle}>{moment().format("DD/MM/YYYY")}</Text>

        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          onRequestClose={() => {
            alert("NONONO");
            setShow(false);
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              activeOpacity={1}
              style={{
                flex: 1,
                alignItems: "flex-end",
                flexDirection: "row",
              }}
              visible={show}
              onPress={() => setShow(false)}
            >
              <TouchableHighlight
                underlayColor={"#fff"}
                style={{
                  flex: 1,
                  borderTopColor: "#e9e9e9",
                  borderTopWidth: 1,
                }}
                onPress={() => {
                  console.log("clickeeedddd");
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: 256,
                    overflow: "hidden",
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <DateTimePicker
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      timeZoneOffsetInMinutes={0}
                      value={new Date(date)}
                      mode="date"
                      minimumDate={new Date(moment().format("DD/MM/YYYY"))}
                      maximumDate={new Date(moment().subtract(5,"years").format("DD/MM/YYYY"))}
                      onChange={onChange}
                    ></DateTimePicker>
                  </View>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

Datepick.defaultProps = (textStyle = {}) => {};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

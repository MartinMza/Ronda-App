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
  const { textStyle, onDateChange } = props;
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
    props.onDateChange(date);
    setShow(false);
  };

  return (
    <TouchableOpacity onPress={() => setShow(true)}>
      <View>
        <Text style={textStyle}>{date.format("DD/MM/YYYY")}</Text>
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
                    borderRadius: 6,

                    overflow: "hidden",
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <DateTimePicker
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      timeZoneOffsetInMinutes={0}
                      value={new Date(date)}
                      mode={"date"}
                      minimumDate={new Date(moment().format("DD/MM/YYYY"))}
                      maximumDate={
                        new Date(
                          moment().subtract(5, "years").format("DD/MM/YYYY")
                        )
                      }
                      onChange={onChange}
                    >
                      <TouchableHighlight
                        underlayColor={"transparent"}
                        style={[styles.btnText, styles.btnCancel]}
                        onPress={()=>console.log("cancelado")}
                      >
                        Cancel
                      </TouchableHighlight>
                    </DateTimePicker>
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

Datepick.defaultProps = { textStyle: {}, onDateChange: () => {} };

const styles = StyleSheet.create({
  btnText: {
    position: "absolute",
    top: 0,
    height: 42,
    paddingHorizontal: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});

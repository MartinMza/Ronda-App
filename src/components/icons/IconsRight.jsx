import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function IconsRight(props) {
  const { navigation } = props;
const user = useSelector(selectUser)
  const goToInbox= () => {
    navigation.navigate("Inbox");
  };
  const goToSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={{ flexDirection: "row", marginRight: 22,}}>
      <Icon name="envelope" size={24} color="black" style={styles.icons} onPress={user?.org_state==="approved"? goToInbox:null}/>
      <Icon name="search" size={24} color="black" style={styles.icons} onPress={user?.org_state==="approved"? goToSearch:null}/>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    marginLeft: 17,
  },
});

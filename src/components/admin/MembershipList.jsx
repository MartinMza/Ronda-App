import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { myMembership} from "../../features/membershipSlice";
import { selectReservation } from "../../features/reservationSlice";

export default function MembershipList(props) {
  const { organizations, navigation } = props;
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    dispatch(myMembership(item));
    navigation.navigate('Home')
  };
  return (
    <FlatList
      data={organizations}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(organizations) => String(organizations.id)}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <Icon
              name="pen-square"
              size={20}
              solid
              color="gray"
              style={{ alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Nombre de la empresa:</Text>
          <Text>{item.name}</Text>
          <Text style={styles.text}>CUIT:</Text>
          <Text>{item.CUIT}</Text>
          <Text style={styles.text}>Creditos disponibles:</Text>
          <Text>{item.avaliable_credits}</Text>
          <Text style={styles.text}>Celular:</Text>
          <Text>{item.phone}</Text>
          <Text style={styles.text}>Razón Social:</Text>
          <Text>{item.social_reason}</Text>
          <Text style={styles.text}>Fecha de facturación:</Text>
          <Text>{item.facturationDay}</Text>
          <Text style={styles.text}>Fecha de registro:</Text>
          <Text>{item.creationDate}</Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    textDecorationLine: "underline",
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    margin: 15,
    width: 333,
  },
  text: {
    fontWeight: "bold",
    marginVertical: 16,
    fontSize: 16,
  },
});

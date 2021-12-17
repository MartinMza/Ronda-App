import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Gradient from "../../components/gradient/Gradient";
import RecoletaPick from "../../../assets/icons/rondaRecoleta.png";
import BelgranoPick from "../../../assets/icons/rondaBelgrano.png";

const Salas = (props) => {
  const { navigation } = props;

  const goToBelgrano = () => {
    navigation.navigate("Belgrano");
  };
  const goToRecoleta = () => {
    navigation.navigate("Recoleta");
  };
  return (
    <View style={styles.container}>
      <Gradient>
        <View style={{ marginVertical: 60 }}>
          <Text style={styles.underText}>SEDES</Text>
          <View style={styles.card}>
            <TouchableOpacity onPress={goToRecoleta}>
              <ImageBackground
                source={RecoletaPick}
                style={styles.image}
                imageStyle={{ borderRadius: 6 }}
                
              />
              <Text style={styles.mainText}>RECOLETA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={goToBelgrano}>
              <ImageBackground
                source={BelgranoPick}
                style={styles.image}
                imageStyle={{ borderRadius: 6 }}
              />
              <Text style={styles.mainText}>BELGRANO</Text>
            </TouchableOpacity>
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
  card: {
    width: 333,
    height: 150,
    marginTop: 75,
    justifyContent: "center",
    alignItems: "stretch",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 60,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 150,
    opacity: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Salas;

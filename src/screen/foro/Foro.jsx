import React from "react";
import {useSelector} from "react-redux"
import { Image, Text, View, StyleSheet,TouchableOpacity } from "react-native";
import Gradient from "../../components/gradient/Gradient";
import Button from "../../components/button/Button";
import { TextInput } from "react-native-gesture-handler";
import { selectUser } from "../../features/userSlice";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Foro(props) {
    const { navigation } = props;
    const goToProfile = () => {
        navigation.navigate("Profile")
    }
    const user = useSelector(selectUser)
    console.log(user)
  return (
    <View style={styles.container}>
      <Gradient>
          <View style={styles.input}>
      <Text style={styles.mainName}>
              {user.name} -
              <MaterialCommunityIcons name="image-plus" size={24} color="black"  position="right"/>  
             </Text> 
            
        <TextInput 
        placeholder="¿Qué estas pensando?"   multiline={true} >
           
        </TextInput>
       
        </View>
        <TouchableOpacity onPress={goToProfile} style={styles.button}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
        <TouchableOpacity ><Text style={styles.underText}>MÁS RECIENTES</Text></TouchableOpacity>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 330,
    height: 52,
    borderRadius: 6,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
     fontSize: 18,
  },
  input: {
    width: 330,
    height: 140,
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 30,
    marginBottom: 15,
    padding: 15,
  },
  underText:{
      color:"white",
      fontSize: 15,
      fontWeight:"bold",
      textDecorationLine:"underline",
      padding: 20
  },
  mainName:{
    fontWeight:"bold",
    fontSize:17,
    fontStyle:"italic",
    marginBottom:2,

  }
});


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Gradient from "../../components/gradient/Gradient";
import PostList from "../../components/post/PostList"
import { TextInput } from "react-native-gesture-handler";
import { selectUser } from "../../features/userSlice";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { localhost } from "../../localHostIP.json";
import { useFormik } from "formik";
import axios from "axios";

const Foro = () => {
  //const { navigation } = props;
  // const goToHome = () => {
  //   navigation.navigate("Home");
  // };
  const user = useSelector(selectUser);
  const [post, setPost] = useState();
  const [load, setLoad] = useState(true)
  const formik = useFormik({
    initialValues: {
      content: "",
      campus: "general",
    },
    //validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (data) => {
      const post = await axios
        .post(`http://${localhost}/api/posts/`, data)
        .then(() => {
          axios
            .get(`http://${localhost}/api/posts/users/${user.id}`) 
            .then((data) => console.log("hola"));
        });
    },
  });
  useEffect(() => {
    axios
      .get(`http://${localhost}/api/posts/users/5`)
      .then((res) => setPost((res.data).reverse()))
      .then(()=>console.log("use Effect ok"))
      .catch((err) => console.error(err));
  }, [load])

  

  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.input}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={styles.mainName}>{user?.name} --</Text>
            <MaterialCommunityIcons name="image-plus" size={20} color="black" />
          </View>

          <TextInput
            value={formik.values.content}
            placeholder="¿Qué estas pensando?"
            multiline={true}
            onChangeText={(text) => formik.setFieldValue("content", text)}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setLoad(!load)}>
          <Text style={styles.underText}>MÁS RECIENTES</Text>
        </TouchableOpacity>
        {/* {post ? post.reverse().map((e,i) => {return <Post content={e.content} key={i} name={e.user.name} img={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F1*OsMBUUchHRtTT3n-ZX2xbA.jpeg&f=1&nofb=1"}/>}) : null} */}
        {post ? <PostList posts={post}/> : null}
      </Gradient>
    </View>
  );
};

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

  underText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: 20,
  },
  mainName: {
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
    marginBottom: 10,
    flexDirection: "row",
  },
});
export default Foro;

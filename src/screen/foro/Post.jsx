import React, { useState, useEffect } from "react";

import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { localhost } from "../../localHostIP.json";
import { useFormik } from "formik";
import CommentList from "../../components/comment/CommentList";

export default function Post(props) {
  const { content, img, name, id, userId } = props;

  const [comments, setComments] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      axios
        .get(`http://${localhost}/api/comment/${id}`)
        .then((res) => setComments(res.data.reverse()))
        .then(() => console.log("use Effect super ok"))
        .catch((err) => console.error(err));
    }
  }, [load]);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validateOnChange: false,
    onSubmit: async (data) => {
      const post = await axios.post(
        `http://${localhost}/api/comment/${id}`,
        data
      );
    },
  });

  return (
    <View>
      <View style={styles.input}>
        <View style={styles.header}>
          <Text style={styles.mainName}>{name}</Text>
          <TouchableOpacity>
            <Icon
              name="ellipsis-v"
              size={15}
              onPress={() => console.log("Like")}
            />
          </TouchableOpacity>
        </View>
        <Text>{content}</Text>
        {img ? (
          <Image
            style={styles.imagen}
            source={{
              uri: img,
            }}
          />
        ) : null}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon name="heart" size={20} onPress={() => console.log("Like")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={() => setLoad(!load)}
        >
          <Icon name="comment" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon name="share" size={20} onPress={() => console.log("Like")} />
        </TouchableOpacity>
      </View>
      <View style={styles.comment}>
        <CommentList comment={comments} />
      </View>

      <View style={styles.commentBox}>
        <TextInput
          placeholder="Agrega un comentario"
          multiline
          editable
          numberOfLines={2}
          style={{ width: 290, marginLeft: 5, marginVertical: 15 }}
          value={formik.values.content}
          onChangeText={(text) => formik.setFieldValue("content", text)}
        />
        <TouchableOpacity
          style={styles.buttonSend}
          onPress={formik.handleSubmit}
        >
          <Icon name="paper-plane" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 330,
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 30,
   
    padding: 15,
  },
  mainName: {
    fontWeight: "bold",
    fontSize: 17,
    fontStyle: "italic",
    marginBottom: 10,
    flexDirection: "row",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  footer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 5,
  },
  buttonFooter: {
    margin: 10,
  },
  imagen: {
    width: 300,
    height: 150,
    marginVertical: 15,
    borderRadius: 6,
  },
  comment: {
    marginTop:5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 6,
  },
  commentBox: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSend: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

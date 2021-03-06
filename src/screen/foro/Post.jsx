import React, { useState, useEffect } from "react";

import {
  Image,
  Text,
  // TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { localhost } from "../../localHostIP.json";
import { useFormik } from "formik";
import CommentList from "../../components/comment/CommentList";
import { TextInput } from "react-native-gesture-handler";

export default function Post(props) {
  const { content, img, name, id, userId } = props;

  const [comments, setComments] = useState([]);
  const [load, setLoad] = useState(false);
  const [send, setSend] = useState(false);
  const [text, setText] = useState("");
  const [like, setLike] = useState(false);
  // const [like2, setLike2] = useState(false); // like's backup (hardcode)

  //------------------comment-------------------

  useEffect(() => {
    if (load) {
      axios
        .get(`http://${localhost}/api/comment/${id}`)
        .then((res) => setComments(res.data.reverse()))
       
        .catch((err) => console.log(err));
    }
  }, [load, send]);

  const handleSubmit = async (text) => {
    setSend(!send);
    axios.post(`http://${localhost}/api/comment/${id}`, { comment: text });
    setText("");
  };

  //----------------------like-------------------

  useEffect(() => {
    axios
      .get(`http://${localhost}/api/likes/${id}/single`)
      .then(({data}) => data ? setLike(true) : setLike(false)) 
      .catch((err) =>console.log(err));
  }, []);

  const handleLike = () => {
    if (like)
      axios
        .delete(`http://${localhost}/api/likes/${id}`)
        .then(() => alert("Ocurrio un problema")); 
    axios
      .post(`http://${localhost}/api/likes/${id}`)
      .then(() => setLike(true))
      .catch((err) => alert("Ocurrio un problema")); 
  };

  // const likeHandle2 = () => (like2 ? setLike2(false) : setLike2(true)); //handleLike's backup (hardcode)

  return (
    <View>
      <View style={styles.input}>
        <View style={styles.header}>
          <Text style={styles.mainName}>{name}</Text>
          <TouchableOpacity>
            <Icon
              name="ellipsis-v"
              size={15}
              onPress={() => console.log("options btn")}
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
          <Icon
            name="heart"
            size={20}
            color={like ? "red" : "black"}
            solid={like ? true : false}
            onPress={() => handleLike()}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={() => setLoad(!load)}
        >
          <Icon name="comment" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon
            name="share"
            size={20}
            onPress={() => console.log("share btn")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.comment}>
        {load ? <CommentList comment={comments} /> : null}
      </View>

      <View style={styles.commentBox}>
        <TextInput
          placeholder="Agrega un comentario"
          multiline
          editable
          numberOfLines={2}
          style={{ width: 290, marginLeft: 5, marginVertical: 15 }}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity
          style={styles.buttonSend}
          onPress={() => handleSubmit(text)}
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
    
    marginTop: 30,
    borderTopRightRadius:6,
    borderTopLeftRadius:6,
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
    borderBottomRightRadius:6,
    borderBottomLeftRadius:6,
    borderTopColor:"gray",
    borderTopWidth:1,
    backgroundColor:"rgba(244,244,244,0.8)"
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
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 6,
    marginBottom:5
  },
  commentBox: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
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

import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { localhost } from "../../localHostIP.json";

export default function Post(props) {
  const { content, img, name, dataId, mylike } = props;
  // const user = useSelector((state) => state.user.user)
  const [like, setLike] = useState(mylike); //WIP
  const [like2, setLike2] = useState(false); // backup -v (hardcode)

  // useEffect(() => {
  //   axios
  //     .get(`http://${localhost}/api/likes/${dataId.postId}`)
  //     .then(({data}) => console.log("DATA-->",data.map((e) => {
  //       if (e.postId == dataId.postId && e.userId == dataId.ownerId) return setLike(true)
  //     } ) ))
  // }, [])

  // useEffect(() => {
  //   axios
  //     .get(`http://${localhost}/api/likes/${dataId.postId}/single`)
  //     .then((data) => console.log("checking useEfect single like post-->",data ))
  // }, [])

  const likeHandle = async () => {
    try {
      if (!like) {
        await axios
          .post(`http://${localhost}/api/likes/${dataId.postId}`)
          .then(() => setLike(true))
      } else {
        await axios
          .delete(`http://${localhost}/api/likes/${dataId.postId}`)
          .then(() => setLike(false));
      }
    } catch (error) {
      console.log(error)
    }
  };

  const likeHandle2 = () => like2 ? setLike2(false) : setLike2(true) //backup -v (hardcode)

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
        {/* {img ? <Image source={{uri: img}} /> : null} */}
        <Image
          style={styles.imagen}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon
            name="heart"
            size={20}
            color={like ? "red" : "black"}
            solid = {like ? true : false}
            onPress={() => likeHandle()}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon
            name="comment"
            size={20}
            onPress={() => console.log("comment btn")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter}>
          <Icon
            name="share"
            size={20}
            onPress={() => console.log("share btn")}
          />
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
});

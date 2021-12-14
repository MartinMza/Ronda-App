import React, { useEffect, useState } from "react"
import {View, Text, StyleSheet} from "react-native"
import Gradient from "../../components/gradient/Gradient"
import styles from "../reserva/Reservation/ReservationStyle"
import axios from "axios"
import { localhost } from "../../localHostIP.json";

const Membership = ()=>{
    const [myMembership, setMyMembership] = useState("")

    useEffect(() => {
        axios
          .get(`http://${localhost}/api/membership/me`)
          .then((res) => setMyMembership(res.data))
          .catch((err) => console.error(err));
      }, []);

    return(
        <View style={styles.container}>
            <Gradient>
                <View>
                    <Text>
                        MI MEBRESIA
                    </Text>
                </View>
                <View>
                    <Text>
                        {myMembership}
                    </Text>
                </View>
            </Gradient>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flex:1
    }
})
export default Membership
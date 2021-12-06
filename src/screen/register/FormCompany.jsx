import axios from "axios";
import React from "react";
import { View } from "react-native";
import Button from "../../components/button/Button";
import {localhost} from "../../../localHostIP.json"
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { login } from "../../features/userSlice";

const FormCompany = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.post(`http://${localhost}/api/auth/me`,{
            email:user.email,
            password: user.password
        })
        .then((data)=>dispatch(login(data.data)))
    },[])
  return (
    <View>
      <Button>
        <Text>Agregar una empresa</Text>
      </Button>
      <Button>
        <Text>Buscar a mi empresa</Text>
      </Button>
    </View>
  );
};

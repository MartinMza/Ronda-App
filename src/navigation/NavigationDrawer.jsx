import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screen/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./NavigationStack";
import Reserva from "../screen/reserva/Reserva";
import Login from "../screen/login/Login";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Reservas" component={Reserva} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

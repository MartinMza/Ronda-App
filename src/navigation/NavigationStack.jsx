import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../screen/login/Start";
import Home from "../screen/home/Home";
import Profile from "../screen/home/Profile";
import Login from "../screen/login/Login";
import Register from "../screen/register/Register";
import Confirmation from "../screen/register/Confirmation";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../screen/login/Start";
import Home from "../screen/home/Home";
import Profile from "../screen/home/Profile";
import MyProfile from "../screen/home/MyProfile";
import Login from "../screen/login/Login";
import Register from "../screen/register/Register";
import Form from "../screen/register/Form";
import Confirmation from "../screen/register/Confirmation";
import Reserva from "../screen/reserva/Reserva";

import Company from "../screen/register/Company";
import NewCompany from "../screen/register/NewCompany";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="MyProfile" >
      <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ title: "", headerTransparent: true }}
      />

      <Stack.Screen
        name="NewCompany"
        component={NewCompany}
        options={{ title: "", headerTransparent: true }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "", headerTransparent: true }}
      />

      <Stack.Screen
        name="Form"
        component={Form}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Reserva"
        component={Reserva}
        options={{ title: "", headerTransparent: false }}
      />
      <Stack.Screen
        name="Company"
        component={Company}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}

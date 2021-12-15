import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "../screen/login/Start";
import Home from "../screen/home/Home";
import Profile from "../screen/home/Profile";
import Login from "../screen/login/Login";
import Register from "../screen/register/Register";
import Confirmation from "../screen/register/Confirmation";
import Reservation from "../screen/reserva/Reservation/Reservation";
import Company from "../screen/register/Company/Company";
import NewCompany from "../screen/register/NewCompany";
import Approve from "../screen/adminorg/approveMembers/ApproveMembers"
import MyProfile from "../screen/home/MyProfile";
import Calendar from "../screen/calendar/Calendar"
import Salas from "../screen/salasyespacios/Salas"
import  Membership  from "../screen/membresia/Membership";
import NewMembership from "../screen/admin/membreship/NewMembership";


const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Start" >
        <Stack.Screen
        name="NewMembership"
        component={NewMembership}
        options={{ title: "" }}
      />
        <Stack.Screen
        name="Salas"
        component={Salas}
        options={{ title: "" }}
      />
       <Stack.Screen
        name="Membership"
        component={Membership}
        options={{ title: "" }}
      />
          <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ title: "" }}
      />
          <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: "" }} />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "", headerTransparent: true }}
      />
    <Stack.Screen
        name="Approve"
        component={Approve}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
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
        name="Reservation"
        component={Reservation}
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

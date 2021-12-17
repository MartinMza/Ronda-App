import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Start from "../screen/login/Start";
import Home from "../screen/home/Home";
import Profile from "../screen/home/Profile";
import MyProfile from "../screen/home/MyProfile";
import Login from "../screen/login/Login";
import Register from "../screen/register/Register";
import Confirmation from "../screen/register/Confirmation";
import Reservation from "../screen/reserva/Reservation/Reservation";
import Company from "../screen/register/Company/Company";
import NewCompany from "../screen/register/NewCompany";
import Approve from "../screen/adminorg/approveMembers/ApproveMembers";
import Calendar from "../screen/calendar/Calendar";
import Salas from "../screen/salasyespacios/Salas";
import Belgrano from "../screen/salasyespacios/Belgrano";
import Recoleta from "../screen/salasyespacios/Recoleta";
import Membership from "../screen/membresia/Membership";
import NewMembership from "../screen/admin/membreship/NewMembership";
import Inbox from "../screen/messenger/Inbox";
import Chat from "../screen/messenger/Chat";
import Search from "../screen/messenger/Search";
import CreateMembership from "../screen/admin/membreship/CreateMembership";
import AssignMembership from "../screen/admin/membreship/AssignMembership";
import AdminOrganization from "../screen/admin/organization/AdminOrganization";
import EditInfo from "../screen/admin/organization/EditInfo";
import AllUserAdmin from "../screen/admin/usersAdmin/AllUserAdmin";
import ReservationAdmin from "../screen/admin/reservationAdmin/ReservationAdmin";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="AllUserAdmin"
        component={AllUserAdmin}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="ReservationAdmin"
        component={ReservationAdmin}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="AdminOrganization"
        component={AdminOrganization}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="EditInfo"
        component={EditInfo}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="AssignMembership"
        component={AssignMembership}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="CreateMembership"
        component={CreateMembership}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="NewMembership"
        component={NewMembership}
        options={{ title: "" }}
      />
      <Stack.Screen name="Salas" component={Salas} options={{ title: "" }} />
      <Stack.Screen
        name="Belgrano"
        component={Belgrano}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Recoleta"
        component={Recoleta}
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
        name="MyProfile"
        component={MyProfile}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "rgba(255,255,255,0.5)",
          },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "rgba(255,255,255,0.5)",
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "rgba(255,255,255,0.5)",
          },
        }}
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

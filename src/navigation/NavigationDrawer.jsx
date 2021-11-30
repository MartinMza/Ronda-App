import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import Profile from "../screen/home/Profile"


const Drawer = createDrawerNavigator();

export default function NavigationDrawer(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}
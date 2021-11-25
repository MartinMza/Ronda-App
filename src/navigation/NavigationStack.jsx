import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screen/login/Login";
import Register from "../screen/register/Register";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>

  );
}

  
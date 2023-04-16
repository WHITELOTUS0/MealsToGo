import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { View, Text} from "react-native";

const Stack=createStackNavigator();

export const AccountNavigator=()=>{
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={AccountScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Login" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}
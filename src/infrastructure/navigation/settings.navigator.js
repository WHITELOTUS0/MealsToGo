import React, { useEffect } from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <SettingsStack.Screen name="Favourites" component={SettingsScreen}/>
        </SettingsStack.Navigator>
    )
}
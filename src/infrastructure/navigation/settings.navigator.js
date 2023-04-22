import React, { useEffect } from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigatsor = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
        </SettingsStack.Navigator>
    )
}
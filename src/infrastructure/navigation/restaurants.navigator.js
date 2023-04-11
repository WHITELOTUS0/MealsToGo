import React from "react";
import { Text } from "react-native";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

import { RestaurantsDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";


const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ ...TransitionPresets.RevealFromBottomAndroid }}>
            <RestaurantStack.Screen
                name="HelloWorld"
                options={{
                    headerShown: false
                }}
                component={RestaurantsScreen}
            />

            <RestaurantStack.Screen
                name="RestaurantDetail"
                options={{
                    headerShown: false
                }}
                component={RestaurantsDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
}
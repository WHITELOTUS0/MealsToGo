import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";


const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen
                name="Restaurants"
                options={{headerShown:false
                }}
                component={RestaurantsScreen}
            />
        </RestaurantStack.Navigator>
    );
}
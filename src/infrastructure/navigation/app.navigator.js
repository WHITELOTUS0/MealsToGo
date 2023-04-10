import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "react-native";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const Settings = () => (<SafeArea><Text>Settings</Text></SafeArea>);
const Map = () => (<SafeArea><Text>Map</Text></SafeArea>);

export const AppNavigator=()=>(
    <NavigationContainer>
         <Tab.Navigator
                screenOptions={({ route }) => ({
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Restaurants') {
                      iconName = "md-restaurant";
                    } else if (route.name === 'Settings') {
                      iconName = "md-settings";
                    } else if (route.name === 'Map') {
                      iconName = "md-map";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                })}

              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
    </NavigationContainer>

);
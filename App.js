import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { theme } from "./src/infrastructure/theme"
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDPTh7_wGywiyM_3b5hHY32KvATe5VpfNE",
  authDomain: "mealstogo-8ab13.firebaseapp.com",
  projectId: "mealstogo-8ab13",
  storageBucket: "mealstogo-8ab13.appspot.com",
  messagingSenderId: "617232651916",
  appId: "1:617232651916:web:c3a91bdf935e9b50994da9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const Tab = createBottomTabNavigator();




export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth,"email@glorry.io", "password")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        }).catch((e) => {
          console.log(e);
        })
    }, 2000)
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
                < Navigation />    
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// adb shell input keyevent 82 -> dev menu

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
 
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);



 

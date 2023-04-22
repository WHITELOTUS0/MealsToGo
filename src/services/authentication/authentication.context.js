import React, {useState, createContext} from "react";
//import * as firebase from "firebase";
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../App";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext=createContext();

export const AuthenticationContextProvider=({children})=>{
    const [isLoading, setIsLoading]=useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    const onLogin=(email, password)=>{
        setIsLoading(true);
        loginRequest(email, password).then((u)=>{
            setUser(u);
            setIsLoading(false);
        }).catch((e)=>{
            setIsLoading(false);
            setError(e.toString());
        })
    }

    const onRegister=(email, password, repeatedPassword)=>{
        setIsLoading(true);
        if(password!==repeatedPassword){
            setError("Passwords do not match");
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((u)=>{
            setUser(u);
            setIsLoading(false);
        }).catch((e)=>{
            setIsLoading(false);
            setError(e.toString());
        });
    }

    return(
        <AuthenticationContext.Provider
        value={{
            user,
            isAuthenticated:!!user,
            isLoading,
            error,
            onLogin,
            onRegister,
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

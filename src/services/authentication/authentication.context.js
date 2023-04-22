import React, {useState, createContext} from "react";
//import * as firebase from "firebase";
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../App";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext=createContext();

export const AuthenticationContextProvider=({children})=>{
    const [isLoading, setIsLoading]=useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

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
        createUserWithEmailAndPassword(auth,email,password);
    }

    return(
        <AuthenticationContext.Provider
        value={{
            user,
            isAuthenticated:!!user,
            isLoading,
            error,
            onLogin,
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

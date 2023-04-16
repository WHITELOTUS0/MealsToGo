import React,{useContext} from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
    const {isAuthenticated}= useContext(AuthenticationContext);
    return <AppNavigator />;
}
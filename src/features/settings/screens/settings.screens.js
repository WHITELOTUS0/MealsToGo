import React,{useContext} from "react";



import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>

      </SafeArea>)
  };
import React,{useContext} from "react";

import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <List.Section>
            
        </List.Section>
      </SafeArea>)
  };
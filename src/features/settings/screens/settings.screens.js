import React,{useContext} from "react";

import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({navigation}) => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <List.Section>
        <List.Item
            style={{padding:16}}
            title="Favourites"
            left={(props)=><List.Icon {...props} color="black" icon=""/>}
            onPress={()=>navigation.navigate("Favourites")}
            />
            <List.Item
            style={{padding:16}}
            title="Logout"
            left={(props)=><List.Icon {...props} color="black" icon=""/>}
            onPress={onLogout}
            />
        </List.Section>
      </SafeArea>)
  };
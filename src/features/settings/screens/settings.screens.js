import { Text, Button } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <Text>Settings</Text>
        <Button title="logout" onPress={() => onLogout()}/>
      </SafeArea>)
  };
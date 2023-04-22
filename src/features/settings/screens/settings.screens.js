import { Text, Button } from "react-native";

export const SettingScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <Text>Settings</Text>
        <Button title="logout" onPress={() => onLogout()}/>
      </SafeArea>)
  };
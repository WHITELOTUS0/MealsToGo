import React from "react";
import { Button } from "react-native-paper";

import { AccountBackground, AccountContainer, AccountCover } from "../components/account.styles";

export const AccountScreen = () => {
  return <AccountBackground >
    <AccountCover/>
    <AccountContainer>
        <Button
        icon="lock-open-outline"
        buttonColor="red"
        mode="contained"
        onPress={()=>console.log("Pressed")}
        >
            LOGIN
        </Button>
    </AccountContainer>
  </AccountBackground>;
};
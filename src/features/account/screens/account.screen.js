import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";

import { AccountBackground, AccountContainer, AccountCover, AuthButton } from "../components/account.styles";

export const AccountScreen = () => {
  return <AccountBackground >
    <AccountCover/>
    <AccountContainer>
        <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={()=>console.log("Pressed")}
        >
            LOGIN
        </AuthButton>
        <Spacer size="large">
        <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={()=>console.log("Pressed")}
        >
            REGISTER
        </AuthButton>
        </Spacer>
    </AccountContainer>
  </AccountBackground>;
};
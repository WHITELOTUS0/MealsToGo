import React from "react";

import LottieView from 'lottie-react-native';

import { Spacer } from "../../../components/spacer/spacer.component";

import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from "../components/account.styles";

export const AccountScreen = ({navigation}) => {
  return <AccountBackground >
    <AccountCover/>
    <LottieView 
    key="animation"
    autoPlay
    loop
    resizeMode="cover"
    source={require("../../../../assets/watermelon.json")}
    />
    <Title>Meals To Go</Title>
    <AccountContainer>
        <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={()=>navigation.navigate("Login")}
        >
            LOGIN
        </AuthButton>
        <Spacer size="large">
        <AuthButton
        icon="email"
        mode="contained"
        onPress={()=>navigation.navigate("Register")}
        >
            REGISTER
        </AuthButton>
        </Spacer>
    </AccountContainer>
  </AccountBackground>;
};
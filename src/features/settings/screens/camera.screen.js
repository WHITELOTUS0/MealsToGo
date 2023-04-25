import React, { useRef, useState, useEffect,useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Button } from "react-native-paper";
import { MD2Colors } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex:1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`
const CameraButton = styled(Button).attrs({
    mode: "contained",
    icon: "camera",
    color: "blue"
 })`
    position: absolute;
    top: 525px;
    left: 140px;
 `;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera
    ref={(camera) => (cameraRef.current = camera)}
    type={Camera.Constants.Type.front}
    ratio={"16:9"}
  >
    <TouchableOpacity onPress={snap}>
      <InnerSnap />
      <CameraButton onPress={snap} buttonColor={MD2Colors.blue700}>Snap!</CameraButton>
    </TouchableOpacity>
  </ProfileCamera>
  );
};
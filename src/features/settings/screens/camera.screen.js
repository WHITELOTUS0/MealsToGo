import React, { useRef, useState, useEffect } from "react";
import { Camera, FlashMode } from "expo-camera";
import styled from "styled-components/native";
import { View } from "react-native";


const ProfileCamera = styled(Camera)`
width:100%;
height:100%
`
export const CameraScreen = () => {
    const [hasPersmission, setHasPermission] = useState(null);
    const cameraRef = useRef();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, [])

    return (
    <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        >
    </ProfileCamera>
    )
};
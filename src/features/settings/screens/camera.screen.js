import React, { useRef } from "react";
import { Camera, FlashMode } from "expo-camera";
import styled from "styled-components/native";


const ProfileCamera=styled(Camera)`
width:100%;
height:100%
`
export const CameraScreen= ()=>{
    const cameraRef = useRef();
    return <ProfileCamera type={Camera.Constants.Type.front} flashMode={FlashMode.on}></ProfileCamera>
};
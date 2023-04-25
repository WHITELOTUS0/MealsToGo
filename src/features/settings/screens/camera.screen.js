import React from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

export const CameraScreen= ()=>{
    return <Camera style={{width:"100%", height:"100%"}}></Camera>
};
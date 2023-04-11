import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';


const Map = styled(MapView)`
height:100%;
width:100%
`;

export const MapScreen = () => (
    <>
    <SafeArea>
    <Map/>
    </SafeArea>
    </>
);


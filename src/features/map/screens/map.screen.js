import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { Search } from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const Map = styled(MapView)`
height:100%;
width:100%
`;

export const MapScreen = () => {
    const {location} = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantsContext);
    return(
    <>

        <Search />
        <Map>
            {restaurants.map((restaurant)=>{
                return null;
            })}
        </Map>

    </>
)};


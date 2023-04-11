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

    const [latDelta, setLatDelta]=useState(0);

    const {lat, lng,viewport} = location;

    useEffect(()=>{
        const northeastLat=viewport.northeast.lat;
        const southwestLat=viewport.southwest.lat;

        setLatDelta(northeastLat-southwestLat);

    }, [location, viewport])
    return(
    <>

        <Search />
        <Map
            region={{
                latitude:lat,
                longitude:lng,
                latitudeDelta:latDelta,
                longitudeDelta:0.02,
            }}
            >
                {restaurants.map(()=>{
                    return null;
                })}
        </Map>

    </>
)};


import React, {useContext} from "react";
import styled from "styled-components";
import {AntDesign} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
background-color:transparent;
border-color:#20232a;
position:absolute;
top:10px;
right:10px;
width:64px;
z-index:9;
`

export const Favourite=()=>{
    const {favourites, addToFavourites, removeFromfavourites}= useContext(FavouritesContext);
    return (
        
    )
};
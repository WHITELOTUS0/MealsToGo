import React, {useContext} from "react";
import styled from "styled-components";
import {AntDesign} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

export const Favourite=()=>{
    const {favourites, addToFavourites, removeFromfavourites}= useContext(FavouritesContext);
    return (
        
    )
};
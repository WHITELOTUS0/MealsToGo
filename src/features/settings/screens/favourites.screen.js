import React, { useContext } from "react";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const FavouritesArea=styled(SafeArea)`
align-items:center;
justify-content:center;
`

export const FavouritesScreen=()=>{
    const {favourites} = useContext(FavouritesContext);
    return favourites.length?
    null:
    (
        <FavouritesArea >
        <Text center>No favourites yet</Text>
        </FavouritesArea>
    );
};
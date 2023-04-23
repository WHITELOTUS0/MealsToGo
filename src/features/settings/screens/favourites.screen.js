import React, { useContext } from "react";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

export const FavouritesScreen=()=>{
    const {favourites} = useContext(FavouritesContext);
    return favourites.length?
    null:
    (
        <SafeArea style={{alignItems:"center", justifyContent:"center"}}>
        <Text center>No favourites yet</Text>
        </SafeArea>
    );
};
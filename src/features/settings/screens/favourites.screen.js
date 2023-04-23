import React, { useContext } from "react";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const FavouritesScreen=()=>{
    const {favourites} = useContext(FavouritesContext);
    return favourites.length?
    ():
    ();
};
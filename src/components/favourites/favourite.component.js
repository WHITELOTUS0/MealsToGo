import React, {useContext} from "react";

import { FavouritesContext } from "../../services/favourites/favourites.context";

export const Favourite=()=>{
    const {favourites, addToFavourites, removeFromfavourites}= useContext(FavouritesContext);
    return (
        
    )
};
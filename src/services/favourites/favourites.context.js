import React, {createContext, useState} from "react";

export const FavouritesContext=createContext();

export const FavouritesContextProvider=({children})=>{
    const [favourites, setFavourites] = useState([]);
    return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>
}
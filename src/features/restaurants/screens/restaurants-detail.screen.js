import React, {useState} from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantsDetailScreen=({route})=>{
    const [breakfastExpanded, setBreakFastExpanded]=useState(false);
    const [lunchExpanded, setLunchFastExpanded]=useState(false);
    const [dinnerfastExpanded, setDinnerFastExpanded]=useState(false);
    const [drinkdfastExpanded, setDrinksFastExpanded]=useState(false);
    const {restaurant}= route.params;

    return(
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant}/>
        </SafeArea>
    );
};